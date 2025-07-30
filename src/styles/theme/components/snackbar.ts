import type { Components, Theme } from "@mui/material"

export const MuiSnackbar: Components["MuiSnackbar"] = {
  styleOverrides: {
    root: {
      maxWidth: 400,
    },
  },
}

export const MuiSnackbarContent = (theme: Theme): Components["MuiSnackbarContent"] => ({
  styleOverrides: {
    root: {
      ...theme.typography.body1,
      backgroundColor: theme.palette.text.primary,
      boxShadow: theme.elevations.level2,
      borderRadius: +theme.shape.borderRadius * 2,
      padding: 0,
    },
    message: {
      padding: "10px 16px",
    },
    action: {
      paddingLeft: 0,
      marginRight: 0,
    },
  },
})
