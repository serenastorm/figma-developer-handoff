export type Token = {
  i: number;
  x: number;
  y: number;
  text: string;
  style: Style;
};

export type Style = {
  color: string;
  weight: string;
};

export type Message = {
  type: "text";
  width: number;
  height: number;
  text: string;
  tokens: Token[];
  language: string;
};
