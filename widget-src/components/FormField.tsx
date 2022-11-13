import { themes } from "../themes";
import type { Theme } from "../types";

const { widget } = figma;
const { AutoLayout, Input, Text } = widget;

interface FormFieldProps extends WidgetJSX.TextStyleProps {
  isEditingEnabled: boolean;
  fontSize?: number;
  inputBehavior?: InputProps["inputBehavior"];
  placeholder: string;
  theme: Theme;
  value: string;
  setValue: (newValue: string) => void;
}

export const FormField = ({
  isEditingEnabled,
  fontSize = 14,
  inputBehavior = "wrap",
  placeholder,
  theme,
  setValue,
  value,
  ...inputProps
}: FormFieldProps) => {
  const textProps = inputProps?.fontFamily
    ? { fontFamily: inputProps.fontFamily }
    : {};

  return isEditingEnabled ? (
    <Input
      value={value}
      placeholder={placeholder}
      onTextEditEnd={(e) => {
        setValue(e.characters);
      }}
      fontSize={fontSize}
      fill={themes[theme].text}
      width="fill-parent"
      inputBehavior={inputBehavior}
      name="FormField"
      {...inputProps}
    />
  ) : (
    <AutoLayout width="fill-parent">
      <Text
        fontSize={fontSize}
        width="fill-parent"
        fill={
          value
            ? inputProps?.fill || themes[theme].text
            : themes[theme].placeholderText
        }
        {...textProps}
      >
        {value || placeholder}
      </Text>
    </AutoLayout>
  );
};
