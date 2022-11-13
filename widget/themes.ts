import type { Theme } from "./types";
// TODO: import Color type from figma
type Themes = { [key in Theme]: { [key: string]: any } };

export const themes: Themes = {
  light: {
    widgetBackground: "#ffffff",
    widgetBorder: { r: 0, g: 0, b: 0, a: 0.05 },
    text: "#363636",
    textRgba: {
      r: 54 / 255,
      g: 54 / 255,
      b: 54 / 255,
      a: 1,
    },
    primaryButtonBackground: "#F3E7FC",
    primaryButtonText: "#793AAF",
    primaryButtonHoverBackground: "#E3CCF4",
    actionButtonBackground: "#F5F5F5",
    actionButtonIconFill: "#575757",
    actionButtonHoverBackground: "#E1E1E1",
    actionButtonHoverIconFill: "#006ADC",
    disabledActionButtonBackground: "#FCFCFC",
    disabledActionButtonIconFill: "#C5C5C5",
    requiredCheckboxBackground: "#E1F0FF",
    placeholderText: "#C3C3C3",
    placeholderTextRgba: {
      r: 195 / 255,
      g: 195 / 255,
      b: 195 / 255,
      a: 1,
    },
    codeInputText: "#E93D82",
  },
  dark: {
    widgetBackground: "#1F1F1F",
    widgetBorder: "#2C2C2C",
    text: "#FFFFFF",
    textRgba: {
      r: 54 / 255,
      g: 54 / 255,
      b: 54 / 255,
      a: 1,
    },
    primaryButtonBackground: "#3A1E48",
    primaryButtonText: "#BF7AF0",
    primaryButtonHoverBackground: "#4E2667",
    actionButtonBackground: "#363636",
    actionButtonIconFill: "#8F8F8F",
    actionButtonHoverBackground: "#D7D7D7",
    actionButtonHoverIconFill: "#52A9FF",
    disabledActionButtonBackground: "#2C2C2C",
    disabledActionButtonIconFill: "#616161",
    requiredCheckboxBackground: "#102A4C",
    placeholderText: "#626262",
    placeholderTextRgba: {
      r: 98 / 255,
      g: 98 / 255,
      b: 98 / 255,
      a: 1,
    },
    codeInputText: "#F65CB6",
  },
};
