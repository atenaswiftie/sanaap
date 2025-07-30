import type { Theme } from "@mui/material";
import { EN_FONT } from "../constants";

export const MuiCssBaseline = (theme: Theme) => ({
  styleOverrides: {
    html: {
      colorScheme: theme.palette.mode,
      scrollBehavior: "smooth",
      scrollPaddingBlockStart: "170px",
    },
    body: {
      backgroundColor: theme.palette.secondary.lighter,
    },
    "@media only screen and (max-width: 600px)": {
      html: {
        userSelect: "none",
      },
      body: {
        userSelect: "none",
      },
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
    "::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
      backgroundColor: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      width: "6px",
      backgroundColor: theme.palette.line.secondary,
      borderRadius: "4px",
      boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.05)",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.background.default,
    },
    "input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0px 1000px ${theme.palette.background.default} inset !important`,
    },
    ".main-wrapper": {
      width: "100%",
      maxWidth: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("md")]: {
        maxWidth: "90%",
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1200px",
      },
    },
    ".raychat_frame": {
      bottom: "100px !important",
    },
    ".text-en": {
      fontFamily: `${EN_FONT} !important`,
      direction: theme.direction === "rtl" ? "rtl" : "ltr",
    },
    ".text-en input": {
      fontFamily: `${EN_FONT} !important`,
    },
  },
});
