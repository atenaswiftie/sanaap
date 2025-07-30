import type { Components, Theme } from "@mui/material"

export const MuiList: Components["MuiList"] = {
  defaultProps: {
    disablePadding: true,
  },
}

export const MuiListItem: Components["MuiListItem"] = {
  styleOverrides: {
    root: {
      minHeight: 56,
    },
  },
}

export const MuiListItemIcon = (theme: Theme): Components["MuiListItemIcon"] => ({
  styleOverrides: {
    root: {
      minWidth: 40,
      color: theme.palette.text.secondary,
    },
  },
})

export const MuiListItemText = (theme: Theme): Components["MuiListItemText"] => ({
  defaultProps: {
    primaryTypographyProps: {
      variant: "subtitle2",
    },
    secondaryTypographyProps: {
      variant: "caption",
    },
  },
  styleOverrides: {
    secondary: {
      marginTop: theme.spacing(0.5),
    },
  },
})
