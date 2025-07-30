import {
  BaseTextFieldProps,
  FilledInputProps,
  InputAdornment,
  InputLabelProps,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  SlotProps,
} from "@mui/material";
import { ElementType, ReactNode, forwardRef, useMemo } from "react";
import { HelperTextContent, HelperTextProps } from "./HelperText";
import useStyles from "./TextField.styles";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: MuiTextFieldProps["variant"] | "simple" | "fill";
  readOnly?: boolean;
  valid?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  extraLabel?: ReactNode;
}

export const TextField = forwardRef<any, TextFieldProps>(function TextField(
  {
    variant = "simple",
    required = false,
    readOnly,
    startIcon,
    endIcon,
    helperText,
    valid,
    label,
    extraLabel,
    slotProps = { input: {}, inputLabel: {} },
    ...restProps
  },
  ref
): JSX.Element {
  const { classes, cx } = useStyles();
  const simple = variant === "simple";
  const fill = variant === "fill";

  const MyInputProps = useMemo<
    SlotProps<ElementType<FilledInputProps>, {}, BaseTextFieldProps>
  >(
    () => ({
      notched: simple || fill ? false : undefined,
      readOnly,
      startAdornment: startIcon ? (
        <InputAdornment position="start">{startIcon}</InputAdornment>
      ) : null,
      endAdornment: endIcon ? (
        <InputAdornment position="end">{endIcon}</InputAdornment>
      ) : null,
      ...slotProps.input,
      classes: {
        root: cx({
          [classes.fill]: fill,
          [classes.readOnly]: readOnly,
          [classes.fillReadOnly]: fill && readOnly,
        }),
      },
    }),
    [simple, fill, slotProps.input, readOnly, startIcon, endIcon, classes, cx]
  );

  const MyInputLabelProps = useMemo<
    SlotProps<ElementType<InputLabelProps>, {}, BaseTextFieldProps>
  >(
    () => ({
      shrink: simple || fill ? true : undefined,
      ...slotProps.inputLabel,
      classes: { root: cx({ [classes.simpleLabel]: simple || fill }) },
      required,
    }),
    [simple, fill, slotProps.inputLabel, classes, cx, required]
  );

  let helperTextType: HelperTextProps["type"] = "info";
  if (valid) {
    helperTextType = "success";
  }
  if (restProps.error) {
    helperTextType = "error";
  }

  const customLabel = extraLabel ? (
    <div className={classes.labelContainer}>
      <span>{label}</span>
      {extraLabel}
    </div>
  ) : (
    label
  );

  return (
    <MuiTextField
      variant={simple || fill ? "outlined" : variant}
      slotProps={{
        input: MyInputProps,
        inputLabel: MyInputLabelProps,
      }}
      helperText={
        Boolean(helperText) && (
          <HelperTextContent type={helperTextType}>
            {helperText}
          </HelperTextContent>
        )
      }
      label={customLabel}
      inputRef={ref}
      {...restProps}
    />
  );
});
