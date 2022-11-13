import { themes } from "../themes";
import type { Theme } from "../types";

const { widget } = figma;
const { Frame } = widget;

type DividerProps = {
  theme: Theme;
};

export const Divider = ({ theme }: DividerProps) => {
  return (
    <Frame
      width="fill-parent"
      height={1}
      fill={themes[theme].widgetBorder}
      name="Divider"
    />
  );
};
