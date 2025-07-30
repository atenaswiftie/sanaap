import type { Components, Theme } from "@mui/material"

export const MuiTooltip = (theme: Theme): Components["MuiTooltip"] => ({
  defaultProps: {
    arrow: true,
    placement: "top",
    enterTouchDelay: 0,
    leaveTouchDelay: 3000,
  },
  styleOverrides: {
    tooltip: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: 500,
    },
    arrow: {
      color: theme.palette.primary.main,
    },
  },
})
