import type { Components, Theme } from "@mui/material";

import { checkboxClasses } from "@mui/material";
import { CheckBoxEmpty, CheckBoxFill } from "@wallpay/icons";

export const MuiCheckbox = (theme: Theme): Components["MuiCheckbox"] => {
  return {
    variants: [
      {
        props: {
          size: "small",
        },
        style: {
          "& svg": {
            fontSize: theme.spacing(2),
          },
        },
      },
      {
        props: {
          size: "medium",
        },
        style: {
          padding: theme.spacing(1),
          "& svg": {
            fontSize: '1.25rem',
          },
        },
      },
      {
        props: {
          color: "primary",
        },
        style: {
          [`&.${checkboxClasses.checked}`]: {
            "& svg": {
              border: "none",
            },
          },
        },
      },
      {
        props: {
          color: "secondary",
        },
        style: {
          [`&.${checkboxClasses.checked}`]: {
            "& svg": {
              border: "none",
            },
          },
        },
      },
    ],
    defaultProps: {
      icon: <CheckBoxEmpty sx={{ color: theme.palette.primary.lighter }} />,
      checkedIcon: <CheckBoxFill sx={{ color: theme.palette.secondary.main }} />,
      color: "secondary",
    },
    styleOverrides: {
      root: {
        padding: theme.spacing(1),
        "&:hover": {
          backgroundColor: "transparent",
        },
        [`&.${checkboxClasses.disabled}`]: {
          "& svg": {
            border: `2px solid ${theme.palette.text.disabled}`,
            borderRadius: theme.shape.borderRadius * 1.5,
          },
          [`&.${checkboxClasses.checked}`]: {
            "& svg": {
              color: theme.palette.text.tertiary,
              backgroundColor: theme.palette.text.disabled,
              border: `2px solid ${theme.palette.text.disabled}`,
              path: {
                fill: theme.palette.text.tertiary,
              },
            },
          },
        },
      },
    },
  };
};
