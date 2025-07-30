import type { Components, Theme } from "@mui/material"

export const MuiDialog = (theme: Theme): Components["MuiDialog"] => ({
  styleOverrides: {
    paper: {
      maxHeight: "min(740px, calc(100% - 64px))",
      borderRadius: +theme.shape.borderRadius * 2,
    },
    paperFullScreen: {
      maxHeight: "none",
      borderRadius: 0,
    },
  },
})

export const MuiBackdrop = (theme: Theme): Components["MuiBackdrop"] => ({
  styleOverrides: {
    root: {
      backgroundColor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(24, 35, 51, 0.4)",
    },
  },
})

export const MuiDialogTitle = (theme: Theme): Components["MuiDialogTitle"] => ({
  styleOverrides: {
    root: {
      padding: theme.spacing(2),
    },
  },
})
