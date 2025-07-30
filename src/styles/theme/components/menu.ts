import { listItemTextClasses, menuItemClasses, paperClasses } from "@mui/material"
import type { Components, Theme } from "@mui/material"

export const MuiMenu = (theme: Theme): Components["MuiMenu"] => ({
  styleOverrides: {
    paper: {
      [`&.${paperClasses.root}`]: {
        boxShadow: theme.elevations.level3,
        borderRadius: +theme.shape.borderRadius * 2,
      },
    },
    list: {
      padding: 8,
    },
  },
})

export const MuiMenuItem = (theme: Theme): Components["MuiMenuItem"] => ({
  styleOverrides: {
    root: {
      ...theme.typography.subtitle2,
      borderRadius: +theme.shape.borderRadius * 2,
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      "&:last-child": {
        marginBottom: 0,
      },
      [`
        &:hover,
        &.${menuItemClasses.selected},
        &.${menuItemClasses.selected}:hover,
        &.${menuItemClasses.selected}.${menuItemClasses.focusVisible}
	    `]: {
        backgroundColor: theme.palette.background.default,
      },
      [`.${listItemTextClasses.primary}`]: {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  },
})
