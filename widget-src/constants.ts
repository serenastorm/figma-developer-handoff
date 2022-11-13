import type { FormData } from "./types";

export const emptyPropValues = {
  name: "",
  type: "",
  default: "",
  required: false,
};

export const initialValues: FormData = {
  name: "",
  description: "",
  htmlTag: "",
  code: "",
  props: [emptyPropValues],
};

export const styles = {
  paddingBlock: 24,
  cellWidth: 140,
  requiredCellWidth: 80,
  cellGap: 16,
  buttonPadding: {
    left: 16,
    right: 16,
    top: 8,
    bottom: 8,
  },
  codeFontFamily: "JetBrains Mono",
};
