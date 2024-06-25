import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    colors: {
      black: string;
      white: string;
      primary: string;
      secondary: string;
    };
  }
}

const theme: Theme = {
  fontSizes: {
    xs: "12px",
    sm: "16px",
    base: "24px",
    md: "36px",
    lg: "48px",
    xl: "64px",
    xxl: "96px",
    xxxl: "128px",
  },
  colors: {
    black: "#12101D",
    white: "#FFFFFF",
    primary: "#B672FD",
    secondary: "#E7266C",
  },
};

export default theme;
