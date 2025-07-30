import type { Components, CSSObject, Theme } from "@mui/material"

export const MuiTab = (theme: Theme): Components["MuiTab"] => ({
  styleOverrides: {
    root: {
      ...(theme.typography.button2 as CSSObject),
      whiteSpace: "nowrap",
    },
  },
})
