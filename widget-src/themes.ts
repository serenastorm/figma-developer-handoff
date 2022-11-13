import type { Theme } from "./types";
// TODO: import Color type from figma
type Themes = { [key in Theme]: { [key: string]: any } };

export const themes: Themes = {
  light: {
    widgetBackground: "#ffffff",
    widgetBorder: { r: 0, g: 0, b: 0, a: 0.05 },
    text: "#363636",
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
    codeInputText: "#E93D82",
  },
  dark: {
    widgetBackground: "#1F1F1F",
    widgetBorder: "#2C2C2C",
    text: "#FFFFFF",
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
    codeInputText: "#F65CB6",
  },
};
