import type { Theme, Components } from "@mui/material";

export const MuiBottomNavigation = (
  theme: Theme
): Components["MuiBottomNavigation"] => ({
  styleOverrides: {
    root: {
      width: "100%",
      border: `1px solid ${theme.palette.line.primary}`,
    },
  },
});

export const MuiBottomNavigationAction = (
  theme: Theme
): Components["MuiBottomNavigationAction"] => ({
  styleOverrides: {
    root: {
      padding: 0,
      minWidth: 60,
      "&.Mui-selected": {
        paddingTop: 0,
      },
      "&.Mui-disabled": {
        "& .MuiBottomNavigationAction-label": {
          color: theme.palette.text.disabled,
        },
        "& path": {
          stroke: theme.palette.text.disabled,
          fill: "none",
        },
        "& svg": {
          fill: "none",
        },
      },
      "&.Mui-active": {
        "& path": {
          fill: theme.palette.secondary.main,
        },
        "& .MuiBottomNavigationAction-label": {
          color: theme.palette.secondary.main,
        },
      },
    },
    label: {
      opacity: 1,
      ...theme.typography.caption,
      "&.Mui-selected": {
        ...theme.typography.overline,
        color: theme.palette.primary.main,
      },
    },
  },
});
