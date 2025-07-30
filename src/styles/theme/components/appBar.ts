import type { Components, Theme } from "@mui/material";

export const MuiAppBar = (theme: Theme): Components["MuiAppBar"] => ({
  defaultProps: { position: "relative" },
  styleOverrides: {
    root: {
      color: theme.palette.text.primary,
      boxShadow: `none`,
      height: 56,
      borderRadius: 1,
    },
  },
});

export const MuiToolbar = (theme: Theme): Components["MuiToolbar"] => ({
  styleOverrides: {
    root: {
      [theme.breakpoints.up("sm")]: {
        minHeight: 56,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
      },
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 56,
      },
    },
  },
});
