/* Most of the code for this file and everything in the iframe folder comes from
https://github.com/freedmand/figma-code-editor-widget, which is under an MIT license
*/

import { styles } from "../constants";
import {
  ensureFontWeight,
  fillMode,
  getFill,
  placeholderTokens,
} from "../helpers/formatCode";
import { themes } from "../themes";
import type { Theme } from "../types";
import type { Message } from "../../iframe/types";

const { widget } = figma;
const { AutoLayout, Frame, Text, useEffect, useSyncedState } = widget;

type CodeFieldProps = {
  isEditingEnabled: boolean;
  theme: Theme;
};

export const CodeField = ({ isEditingEnabled, theme }: CodeFieldProps) => {
  const [tokens, setTokens] = useSyncedState("text", placeholderTokens(theme));
  const FONT_SIZE = styles.formFieldFontSize;
  const LETTER_WIDTH = FONT_SIZE * 0.6;
  const LETTER_HEIGHT = (FONT_SIZE / 24) * 30;

  const inputFrameProps = {
    stroke: themes[theme].widgetBorder,
    cornerRadius: 4,
    padding: { top: 8, bottom: 8, left: 12, right: 12 },
  };

  useEffect(() => {
    figma.ui.onmessage = (msg: Message) => {
      if (msg.type === "text") {
        if (msg.text === "") {
          setTokens(placeholderTokens(theme, msg.language));
          // setValue(placeholderTokens(theme, msg.language));
        } else {
          setTokens(msg);
          // setValue(msg);
        }
      }
    };
  });

  return (
    <AutoLayout
      width="fill-parent"
      direction="vertical"
      spacing={8}
      name="CodeField"
      tooltip={`${
        isEditingEnabled ? "Click" : "Enable editing"
      } to edit this field`}
      onClick={
        // Use async callbacks or return a promise to keep the Iframe window
        // opened. Resolving the promise, closing the Iframe window, or calling
        // "figma.closePlugin()" will terminate the code.
        () =>
          isEditingEnabled
            ? new Promise((resolve) => {
                const injectedHtml = __html__
                  .replace(
                    /['"]\$\$\$INITIAL_DOC\$\$\$['"]/,
                    JSON.stringify(tokens.text)
                  )
                  .replace(
                    /['"]\$\$\$INITIAL_LANGUAGE\$\$\$['"]/,
                    JSON.stringify(tokens.language)
                  );

                figma.showUI(injectedHtml, { width: 500, height: 300 });
              })
            : undefined
      }
    >
      <Text fill={themes[theme].text}>Code</Text>
      <AutoLayout
        width="fill-parent"
        height={
          tokens.height * LETTER_HEIGHT +
          inputFrameProps.padding.top +
          inputFrameProps.padding.bottom
        }
        {...inputFrameProps}
      >
        <Frame width="fill-parent" height="fill-parent">
          {tokens.tokens.map((token, tokenIndex) => {
            return (
              <Text
                fontFamily={styles.codeFontFamily}
                fontSize={FONT_SIZE}
                x={token.x * LETTER_WIDTH}
                y={token.y * LETTER_HEIGHT}
                fill={fillMode(getFill(token.style.color, theme), theme)}
                fontWeight={ensureFontWeight(token.style.weight)}
                key={`token-${tokenIndex}-${token.text}`}
              >
                {token.text}
              </Text>
            );
          })}
        </Frame>
      </AutoLayout>
    </AutoLayout>
  );
};
