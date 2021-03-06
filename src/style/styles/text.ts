import * as CSS from "csstype";

import {
  FontSizeProps,
  FontWeightProps,
  fontSize,
  fontWeight,
  style
} from "styled-system";

import { css } from "../styled";

import { IntentColorProps, intentColor } from "./intent-color";

export interface WordWrapProps {
  wordWrap?: CSS.WordWrapProperty;
}
export const wordWrap = style({
  prop: "wordWrap",
  cssProperty: "word-wrap"
});

export interface WordBreakProps {
  wordBreak?: CSS.WordBreakProperty;
}
export const wordBreak = style({
  prop: "wordBreak",
  cssProperty: "word-break"
});

export interface WhitespaceProps {
  whiteSpace?: CSS.WhiteSpaceProperty;
}
export const whiteSpace = style({
  prop: "whiteSpace",
  cssProperty: "white-space"
});

export type TextProps = IntentColorProps &
  FontSizeProps &
  FontWeightProps &
  WordWrapProps &
  WordBreakProps &
  WhitespaceProps;

export const text = css<TextProps>`
  ${intentColor};
  ${fontSize};
  ${fontWeight};
  ${wordWrap};
  ${wordBreak};
  ${whiteSpace};
`;
