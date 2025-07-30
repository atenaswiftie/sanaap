import type { Components, Theme } from "@mui/material";

export const MuiSlider = (theme: Theme): Components["MuiSlider"] => ({
  styleOverrides: {
    root: {
      height: 4,
      display: "block",
      boxSizing: "border-box",
      width: "calc(100%)",
      padding: "24px 0px 40px 16px",
    },
    rail: {
      width: "calc(100% - 16px)",
      marginLeft: -8,
      backgroundColor: theme.palette.line.primary,
      opacity: 1,
    },
    thumb: {
      width: 22,
      height: 22,
      transform: "translate(-50%, -50%)",
      border: "2px solid",
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.overlay,
    },
    mark: {
      color: theme.palette.line.primary,
    },
    markLabel: {
      transform: "translateX(50%)",
      color: theme.palette.text.disabled,
      fontSize: 12,
    },
    valueLabel: {
      backgroundColor: "unset",
      color: theme.palette.text.primary,
      fontSize: 12,
      top: 50,
    },
    track: {
      maxWidth: "calc(100% - 16px)",
      marginLeft: 8,
    },
  },
});
