import { loadingButtonClasses } from "@mui/lab";
import type { CSSObject, Components, Theme } from "@mui/material";
import {
  buttonClasses,
  iconButtonClasses,
  svgIconClasses,
} from "@mui/material";

declare module "@mui/material/Button" {
  export interface ButtonPropsVariantOverrides {
    ghost: true;
  }
}

export const MuiButton = (theme: Theme): Components["MuiButton"] => ({
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      padding: "8px 12px",
      minWidth: "initial",
      ...(theme.typography.button as CSSObject),

      [`&.${buttonClasses.disabled}`]: {
        color: theme.palette.text.disabled,
      },
      [`.${loadingButtonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main,
      },
    },
    sizeLarge: {
      ...(theme.typography.button1 as CSSObject),
      padding: "10px 20px",
    },
    sizeSmall: {
      ...(theme.typography.body2 as CSSObject),
      padding: "6px 8px",
      [`.${buttonClasses.startIcon}`]: {
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20),
        },
      },
    },
    startIcon: {
      marginLeft: -8,
      marginRight: 4,
      "&>*:nth-of-type(1)": {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    endIcon: {
      marginRight: -8,
      marginLeft: 4,
      "&>*:nth-of-type(1)": {
        fontSize: theme.typography.pxToRem(24),
      },
    },
  },
  variants: [
    {
      props: { size: "large", color: "primary" },
      style: {
        color: theme.palette.primary.overlay,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
    {
      props: { variant: "contained", color: "primary" },
      style: {
        color: theme.palette.primary.overlay,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
    {
      props: { variant: "contained", color: "secondary" },
      style: {
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    {
      props: { variant: "contained", color: "error" },
      style: {
        color: theme.palette.error.darker,
      },
    },
    {
      props: { variant: "contained", color: "success" },
      style: {
        color: theme.palette.success.darker,
      },
    },
    {
      props: { variant: "contained", color: "warning" },
      style: {
        color: theme.palette.warning.darker,
      },
    },
    {
      props: { variant: "ghost" },
      style: {
        backgroundColor: "#27262C",
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    {
      props: { variant: "ghost", color: "secondary" },
      style: {
        backgroundColor: theme.palette.secondary.lighter,
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
    {
      props: { variant: "ghost", color: "primary" },
      style: {
        backgroundColor: theme.palette.primary.overlay,
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
    {
      props: { variant: "outlined" },
      style: {
        borderColor: theme.palette.primary.darker,
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.grey[200],
          color: theme.palette.text.disabled,
        },
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: {
        borderColor: theme.palette.primary.darker,
      },
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: {
        borderColor: theme.palette.secondary.lighter,
      },
    },
    {
      props: { variant: "outlined", color: "error" },
      style: {
        borderColor: theme.palette.error.lighter,
      },
    },
    {
      props: { variant: "outlined", color: "success" },
      style: {
        borderColor: theme.palette.success.lighter,
      },
    },
    {
      props: { variant: "outlined", color: "success", type: "submit" },
      style: {
        borderColor: theme.palette.success.main,
      },
    },
    {
      props: { variant: "outlined", color: "warning" },
      style: {
        borderColor: theme.palette.warning.lighter,
      },
    },
    {
      props: { variant: "outlined", disabled: true },
      style: {
        [`&.${buttonClasses.disabled}`]: {
          opacity: 0.4,
          border: "1px solid rgba(0, 0, 0, 0.20)",
          backgroundColor: "transparent",
        },
        paddingLeft: 8,
        paddingRight: 8,
        [`.${buttonClasses.startIcon}`]: {
          marginLeft: -4,
        },
        [`.${buttonClasses.endIcon}`]: {
          marginRight: -4,
        },
      },
    },
    {
      props: { variant: "contained", disabled: true },
      style: { backgroundColor: theme.palette.grey[200] },
    },
    {
      props: { variant: "text" },
      style: {
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.grey[200],
          color: theme.palette.text.disabled,
        },
      },
    },
  ],
});

export const MuiIconButton = (theme: Theme): Components["MuiIconButton"] => ({
  defaultProps: {
    TouchRippleProps: {
      center: false,
    },
  },
  styleOverrides: {
    root: {
      borderRadius: +theme.shape.borderRadius * 2,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.secondary,
      [`.${svgIconClasses.root}, svg`]: {
        fontSize: "inherit",
      },
      [`&.${iconButtonClasses.disabled}`]: {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.text.disabled,
      },
    },
    sizeLarge: {
      fontSize: theme.typography.pxToRem(24),
    },
    sizeSmall: {
      fontSize: theme.typography.pxToRem(16),
      padding: "8px",
    },
  },
});
