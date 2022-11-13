export type Theme = "light" | "dark";

export type FormData = {
  name: string;
  description: string;
  htmlTag: string;
  code: string;
  props: { name: string; type: string; default: string; required: boolean }[];
};

export type PropFieldAction = "delete" | "moveUp" | "moveDown";

// TODO get Color type from Figma
export type IconFill = string;
