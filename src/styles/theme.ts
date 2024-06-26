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
    xs: "12rem",
    sm: "16rem",
    base: "24rem",
    md: "36rem",
    lg: "48rem",
    xl: "64rem",
    xxl: "96rem",
    xxxl: "128rem",
  },
  colors: {
    black: "#12101D",
    white: "#FFFFFF",
    primary: "#B672FD",
    secondary: "#E7266C",
  },
};

export default theme;
