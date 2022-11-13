import { styles } from "../constants";
import { themes } from "../themes";
import type { Theme } from "../types";

const { widget } = figma;
const { AutoLayout, Input, Text } = widget;

type CodeFieldProps = {
  isEditingEnabled: boolean;
  theme: Theme;
  value: string;
  setValue: (newValue: string) => void;
};

export const CodeField = ({
  isEditingEnabled,
  theme,
  setValue,
  value,
}: CodeFieldProps) => {
  const inputFrameProps = {
    stroke: themes[theme].widgetBorder,
    cornerRadius: 4,
    padding: { top: 8, bottom: 8, left: 12, right: 12 },
  };

  const inputTextProps = {
    fontSize: 14,
    fill: themes[theme].text,
    fontFamily: styles.codeFontFamily,
  };

  return (
    <AutoLayout
      width="fill-parent"
      direction="vertical"
      spacing={8}
      name="CodeField"
      onClick={() => figma.showUI(__html__)}
    >
      <Text fill={themes[theme].text}>Code</Text>
      {isEditingEnabled ? (
        <Input
          value={value}
          onTextEditEnd={(e) => {
            setValue(e.characters);
          }}
          placeholder="Add some code..."
          width="fill-parent"
          inputFrameProps={inputFrameProps}
          name="CodeInput"
          inputBehavior="multiline"
          {...inputTextProps}
        />
      ) : (
        <AutoLayout width="fill-parent" {...inputFrameProps}>
          <Text {...inputTextProps}>{value}</Text>
        </AutoLayout>
      )}
    </AutoLayout>
  );
};
