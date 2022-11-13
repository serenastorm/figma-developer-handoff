import { placeholderTokens } from "./helpers/formatCode";
import type { FormData, Theme } from "./types";

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
  props: [emptyPropValues],
};

export const styles = {
  paddingBlock: 24,
  cellWidth: 140,
  requiredCellWidth: 80,
  cellGap: 16,
  formFieldFontSize: 14,
  buttonPadding: {
    left: 16,
    right: 16,
    top: 8,
    bottom: 8,
  },
  codeFontFamily: "JetBrains Mono",
};
