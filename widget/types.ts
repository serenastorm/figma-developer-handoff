export type Theme = "light" | "dark";

export type FormData = {
  name: string;
  description: string;
  htmlTag: string;
  props: { name: string; type: string; default: string; required: boolean }[];
};

export type PropFieldAction = "delete" | "moveUp" | "moveDown";

export type IconFill = WidgetJSX.Color;
