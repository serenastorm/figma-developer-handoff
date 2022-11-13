import { getActionIconSrc } from "../icons";
import { themes } from "../themes";
import type { PropFieldAction, Theme } from "../types";

const { widget } = figma;
const { AutoLayout, Text, SVG } = widget;

type ActionButtonProps = {
  disabled?: boolean;
  theme: Theme;
  type: PropFieldAction;
  onClick: () => void;
};

export const ActionButton = ({
  disabled,
  theme,
  type,
  onClick,
}: ActionButtonProps) => {
  const buttonSize = 32;

  return (
    <AutoLayout
      direction="horizontal"
      width={buttonSize}
      height={buttonSize}
      cornerRadius={buttonSize}
      fill={
        disabled
          ? themes[theme].disabledActionButtonBackground
          : themes[theme].actionButtonBackground
      }
      onClick={() => (disabled ? undefined : onClick())}
      hoverStyle={{
        fill: disabled
          ? themes[theme].disabledActionButtonBackground
          : themes[theme].actionButtonHoverBackground,
      }}
      name="ActionButton"
    >
      <SVG
        src={getActionIconSrc[type](
          disabled
            ? themes[theme].disabledActionButtonIconFill
            : themes[theme].actionButtonIconFill
        )}
        width={buttonSize}
        height={buttonSize}
        name="ActionButtonIcon"
      />
    </AutoLayout>
  );
};
