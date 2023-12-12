export type ColorAppearance = "light" | "dark";

export type ColorTheme = {
  altBgCol: string;
  bgCol: string;
  fgCol: string;
  primaryCol: string;
  secondaryCol?: string;
  tertiaryCol?: string;
};

export type ColorSchemes = {
  [k in ColorAppearance]: ColorTheme;
};
