import type { Components, Theme } from "@mui/material/styles"

export const MuiLinearProgress = (thene: Theme): Components["MuiLinearProgress"] => ({
  defaultProps: {
    color: "secondary",
  },
  styleOverrides: {
    root: {
      backgroundColor: thene.palette.line.primary,
    },
  },
})
