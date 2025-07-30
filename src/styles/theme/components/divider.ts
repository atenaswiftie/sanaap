import type { Components, Theme } from "@mui/material"

export const MuiDivider = (theme: Theme): Components["MuiDivider"] => ({
  styleOverrides: {
    root: {
      borderColor: theme.palette.line.primary,
    },
    inset: {
      marginLeft: theme.spacing(7),
    },
  },
})
