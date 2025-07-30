import type { Components, Theme } from "@mui/material"

export const MuiFormControlLabel = (theme: Theme): Components["MuiFormControlLabel"] => ({
  styleOverrides: {
    root: {
      marginLeft: theme.spacing(-1),
      marginRight: 0,
    },
  },
})
