import type { Components, Theme } from "@mui/material"

export const MuiSvgIcon = (theme: Theme): Components["MuiSvgIcon"] => ({
  styleOverrides: {
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
})
