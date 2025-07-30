import type { Components, CSSObject, Theme } from "@mui/material";
import {
  formLabelClasses,
  inputAdornmentClasses,
  inputBaseClasses,
  inputLabelClasses,
  outlinedInputClasses,
  selectClasses,
  svgIconClasses,
} from "@mui/material";

declare module "@mui/material/TextField" {
  export interface TextFieldPropsSizeOverrides {
    tiny: true;
    large: true;
  }
}
declare module "@mui/material/FormControl" {
  interface FormControlPropsSizeOverrides {
    tiny: true;
    large: true;
  }
}
declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    tiny: true;
    large: true;
  }
}

export const MuiInputBase = (theme: Theme): Components["MuiInputBase"] => ({
  styleOverrides: {
    root: {
      [`&.${inputBaseClasses.multiline}`]: { padding: theme.spacing(1) },
    },
  },
});

export const MuiTextField = (theme: Theme): Components["MuiTextField"] => ({
  defaultProps: {
    margin: "normal",
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      textAlign: "start",
    },
  },
  variants: [
    {
      props: { size: "tiny" },
      style: {
        [`.${inputLabelClasses.root}`]: {
          ...theme.typography.subtitle3,
        },
      },
    },
  ],
});

export const MuiFormLabel: Components["MuiFormLabel"] = {
  styleOverrides: {
    asterisk: {
      [`&.${formLabelClasses.error}`]: {
        color: "inherit",
      },
    },
  },
};

export const MuiInputLabel = (theme: Theme): Components["MuiInputLabel"] => ({
  styleOverrides: {
    root: {
      ...theme.typography.subtitle2,
      color: theme.palette.grey[700],
      [`&.${inputLabelClasses.disabled}`]: {
        color: theme.palette.grey[800],
      },
      [`&.${inputLabelClasses.focused}`]: {
        color: theme.palette.text.primary,
        background: theme.palette.background.paper,
      },
      [`&.${inputLabelClasses.error}`]: {
        color: theme.palette.text.primary,
      },
    },
    outlined: {
      transform: "translate(14px, 6px) scale(1)",
      [`&.${inputLabelClasses.shrink}`]: {
        transform: "translate(14px, -12px) scale(0.75)",
      },
      [`&.${inputLabelClasses.sizeSmall}`]: {
        transform: "translate(14px, 4px) scale(1)",
        [`&.${inputLabelClasses.shrink}`]: {
          transform: "translate(14px, -10px) scale(0.75)",
        },
      },
    },
    asterisk: {
      marginLeft: theme.spacing(0.5),
      color: "inherit",
    },
    sizeSmall: {
      ...(theme.typography.subtitle3 as CSSObject),
    },
  },
});

export const MuiOutlinedInput = (
  theme: Theme
): Components["MuiOutlinedInput"] => ({
  styleOverrides: {
    root: {
      ...theme.typography.body2,
      borderRadius: +theme.shape.borderRadius * 2,
      "&:hover": {
        [`.${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.line.tertiary,
        },
      },
      [`&.${outlinedInputClasses.focused}`]: {
        [`.${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.primary.main,
          borderWidth: 1,
          // boxShadow: `0px 0px 0px 1px ${theme.palette.primary.lighter}`,
        },
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        border: "none",
        backgroundColor: theme.palette.background.default,
        [`.${inputAdornmentClasses.root}`]: {
          color: theme.palette.text.disabled,
        },
      },
      [`&.${outlinedInputClasses.error}`]: {
        "&:hover": {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.error.main,
          },
        },
        [`&.${outlinedInputClasses.focused}`]: {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.error.main,
            // boxShadow: `0px 0px 0px 1px ${theme.palette.error.main}`,
          },
        },
      },
      [`&.Mui-readOnly`]: {
        "& fieldset": {
          borderStyle: "dashed",
          borderColor: theme.palette.line.secondary,
        },
      },
    },

    input: {
      height: "auto",
      padding: theme.spacing(0.75, 1),
      textAlign: "inherit",
    },
    adornedStart: {
      paddingLeft: theme.spacing(1),
    },
    adornedEnd: {
      paddingRight: theme.spacing(1),
    },
  },
  variants: [
    {
      props: { size: "tiny" },
      style: {
        ...theme.typography.caption,
        input: {
          padding: theme.spacing(0.25, 0.75),
        },
        [`&.${inputBaseClasses.adornedStart}`]: {
          paddingLeft: theme.spacing(0.25),
        },
        [`&.${inputBaseClasses.adornedEnd}`]: {
          paddingRight: theme.spacing(0.25),
        },
        [`.${selectClasses.select}`]: {
          padding: theme.spacing(0.25, 0.75),
          paddingRight: `${theme.spacing(3)} !important`, // I was forced to make it `important` to override very specific mui style
        },
        [`.${selectClasses.icon}`]: {
          fontSize: 20,
          right: 2,
        },
      },
    },
    {
      props: { size: "small" },
      style: {
        ...theme.typography.body2,
        input: {
          padding: theme.spacing(0.5, 0.75),
        },
        [`&.${inputBaseClasses.adornedStart}`]: {
          paddingLeft: theme.spacing(0.75),
        },
        [`&.${inputBaseClasses.adornedEnd}`]: {
          paddingRight: theme.spacing(0.75),
        },
        [`.${selectClasses.select}`]: {
          padding: theme.spacing(0.5, 0.75),
          paddingRight: `${theme.spacing(4)} !important`, // I was forced to make it `important` to override very specific mui style
        },
        [`.${selectClasses.icon}`]: {
          fontSize: 20,
          right: 6,
        },
      },
    },
    {
      props: { size: "medium" },
      style: {
        [`.${selectClasses.select}`]: {
          padding: theme.spacing(0.75, 1),
          paddingRight: `${theme.spacing(5)} !important`, // I was forced to make it `important` to override very specific mui style
        },
        [`.${selectClasses.icon}`]: {
          fontSize: 24,
          right: 8,
        },
      },
    },
    {
      props: { size: "large" },
      style: {
        height: 48,
        input: {
          padding: theme.spacing(1.25, 1.5),
        },
        [`&.${inputBaseClasses.adornedStart}`]: {
          paddingLeft: theme.spacing(1.5),
        },
        [`&.${inputBaseClasses.adornedEnd}`]: {
          paddingRight: theme.spacing(1.5),
        },
        [`.${selectClasses.select}`]: {
          padding: theme.spacing(1.25, 1.5),
          paddingRight: `${theme.spacing(6)} !important`, // I was forced to make it `important` to override very specific mui style
        },
        [`.${selectClasses.icon}`]: {
          fontSize: 24,
          right: 12,
        },
      },
    },
    {
      props: { disabled: true },
      style: {
        color: theme.palette.text.disabled,
        border: "none",
        backgroundColor: "#F4F7F7",
        opacity: 0.4,
        input: {
          border: "none",
        },
        fieldset: {
          border: "none",
        },
      },
    },
    {
      props: { color: "success" },
      style: {
        [`&.${outlinedInputClasses.focused}`]: {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.success.main,
          },
        },
        "&:hover": {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.success.dark,
          },
        },
        fieldset: {
          borderColor: theme.palette.success.main,
        },
      },
    },
  ],
});

export const MuiInputAdornment = (
  theme: Theme
): Components["MuiInputAdornment"] => ({
  styleOverrides: {
    root: {
      color: theme.palette.text.secondary,
      [`&.${inputAdornmentClasses.positionStart}`]: {
        marginRight: 0,
      },
      [`&.${inputAdornmentClasses.positionEnd}`]: {
        marginLeft: 0,
      },
      ["&.MuiInputAdornment-sizeTiny, &.MuiInputAdornment-sizeSmall"]: {
        [`.${svgIconClasses.root}`]: {
          fontSize: 20,
        },
      },
    },
  },
});

export const MuiFormHelperText = (
  theme: Theme
): Components["MuiFormHelperText"] => ({
  styleOverrides: {
    root: {
      ...theme.typography.caption,
      marginTop: 8,
      marginLeft: 0,
      marginRight: 0,
    },
  },
  variants: [
    {
      props: { margin: "dense" },
      style: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
  ],
});
