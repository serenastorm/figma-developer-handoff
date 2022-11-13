import { themes } from "../themes";
import { darkModeIconSrc, lightModeIconSrc } from "../icons";
import { styles } from "../constants";
import type { Theme } from "../types";

const { widget } = figma;
const { AutoLayout, Frame, Text, SVG, useSyncedState, usePropertyMenu } =
  widget;

type ButtonProps = {
  icon?: string;
  title: string;
  theme: Theme;
  onClick: () => void;
  variant?: "default" | "primary";
};

export const Button = ({
  icon,
  title,
  theme,
  onClick,
  variant = "default",
}: ButtonProps) => {
  return (
    <AutoLayout
      direction="horizontal"
      verticalAlignItems="center"
      padding={styles.buttonPadding}
      fill={
        variant === "primary"
          ? themes[theme].primaryButtonBackground
          : themes[theme].actionButtonBackground
      }
      spacing={8}
      cornerRadius={4}
      name="Button"
      onClick={onClick}
      hoverStyle={{
        fill:
          variant === "primary"
            ? themes[theme].primaryButtonHoverBackground
            : themes[theme].actionButtonHoverBackground,
      }}
    >
      {icon && <SVG src={icon} />}
      <Text
        fill={
          variant === "primary"
            ? themes[theme].primaryButtonText
            : themes[theme].actionButtonIconFill
        }
      >
        {title}
      </Text>
    </AutoLayout>
  );
};
