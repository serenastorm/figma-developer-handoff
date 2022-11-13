import { styles } from "../constants";
import { themes } from "../themes";
import type { Theme } from "../types";

const { widget } = figma;
const { AutoLayout, Input, Text } = widget;

type HTMLTagFieldProps = {
  isEditingEnabled: boolean;
  theme: Theme;
  value: string;
  setValue: (newValue: string) => void;
};

export const HTMLTagField = ({
  isEditingEnabled,
  theme,
  setValue,
  value,
}: HTMLTagFieldProps) => {
  const inputFrameProps = {
    stroke: themes[theme].widgetBorder,
    cornerRadius: 4,
    padding: { top: 8, bottom: 8, left: 12, right: 12 },
  };

  const inputTextProps = {
    fontSize: styles.formFieldFontSize,
    fill: themes[theme].text,
    fontFamily: styles.codeFontFamily,
  };

  return (
    <AutoLayout
      width="fill-parent"
      direction="vertical"
      spacing={8}
      name="HTMLTagField"
      tooltip={`${
        isEditingEnabled ? "Click" : "Enable editing"
      } to edit this field`}
    >
      <Text fill={themes[theme].text}>HTML tag</Text>
      {isEditingEnabled ? (
        <Input
          value={value}
          onTextEditEnd={(e) => {
            setValue(e.characters);
          }}
          placeholder="<a>, <button>, ..."
          width="fill-parent"
          name="HTMLTagInput"
          inputBehavior="wrap"
          inputFrameProps={inputFrameProps}
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
