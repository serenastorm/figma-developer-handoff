/* Most of the code for this file and everything in the iframe folder comes from
https://github.com/freedmand/figma-code-editor-widget, which is under an MIT license
*/

import { themes } from "../themes";
import type { Theme } from "../types";
import type { Message, Token } from "../../iframe/types";

export const getFill = (style: string, theme: Theme): WidgetJSX.Color => {
  const defaultColor = themes[theme].textRgba;

  try {
    if (style.startsWith("rgb")) {
      const numbers = style
        .split(/[^0-9]+/)
        .filter((x) => x.trim().length > 0)
        .map((x) => parseInt(x));
      if (numbers.length >= 3) {
        return {
          r: numbers[0] / 255,
          g: numbers[1] / 255,
          b: numbers[2] / 255,
          a: numbers.length >= 4 ? numbers[3] : 1,
        };
      }
    }
    return defaultColor;
  } catch (e) {
    return defaultColor;
  }
};

export const fillMode = (
  color: WidgetJSX.Color,
  theme: Theme
): WidgetJSX.Color => {
  if (theme === "light") return color;
  return {
    r: 1 - color.r,
    g: 1 - color.g,
    b: 1 - color.b,
    a: color.a,
  };
};

export const placeholderTokens = (theme: Theme, language?: string): Message => {
  const placeholderText = "Add some code...";

  const tokens: Token[] = [];
  let x = 0;
  let y = 0;
  let width = 0;
  for (let i = 0; i < placeholderText.length; i++) {
    const text = placeholderText.charAt(i);

    tokens.push({
      i,
      x,
      y,
      text,
      style: {
        color: themes[theme].placeholderTextRgba,
        weight: "normal",
      },
    });

    if (text === "\n") {
      x = 0;
      y++;
    } else {
      x++;
      if (x > width) {
        width = x;
      }
    }
  }

  const height = y + 1;
  return {
    type: "text",
    width,
    height,
    text: placeholderText,
    tokens,
    language: language == null ? "JavaScript" : language,
  };
};

export const ensureFontWeight = (
  weight: string
):
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "thin"
  | "extra-light"
  | "light"
  | "normal"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black" => {
  if (weight.trim().length === 0) {
    return "normal";
  }
  const weightInt = parseInt(weight);
  if (weightInt % 100 === 0 && weightInt > 0 && weightInt < 1000) {
    return weightInt as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  }

  const normalizedWeight = weight.toLowerCase().trim();

  if (normalizedWeight === "thin") return "thin";
  if (normalizedWeight === "extra-light") return "extra-light";
  if (normalizedWeight === "light") return "light";
  if (normalizedWeight === "normal") return "normal";
  if (normalizedWeight === "medium") return "medium";
  if (normalizedWeight === "semi-bold") return "semi-bold";
  if (normalizedWeight === "bold") return "bold";
  if (normalizedWeight === "extra-bold") return "extra-bold";
  if (normalizedWeight === "black") return "black";
  return "normal";
};
