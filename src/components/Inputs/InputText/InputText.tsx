import type { ForwardRefRenderFunction } from "react";
import type { InputTextProps } from "./types";

import { TextField as MuiTextField } from "@mui/material";
import { clsx } from "clsx";
import { forwardRef } from "react";

import { CheckmarkCircleFill, XmarkOctagonFill } from "@wallpay/icons";

import { Body2, Typography } from "../../DataDisplay/Typography";

const getHelperTextIcon = (props: InputTextProps) => {
  if (props.error) {
    return <XmarkOctagonFill key="error" fontSize="inherit" />;
  }

  if (props.success) {
    return (
      <CheckmarkCircleFill key="success" color="success" fontSize="inherit" />
    );
  }

  // return <InfomarkCircleFill key="default" fontSize="inherit" />;
};

const TextFieldComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  InputTextProps
> = (props, ref) => {
  return (
    <MuiTextField
      ref={ref}
      {...props}
      InputProps={{
        readOnly: !!props.readOnly,
        ...props.InputProps,
      }}
      InputLabelProps={{
        shrink: true,
        className: clsx(
          props.className,
          `Mui-size${props.size && props.size.charAt(0).toUpperCase() + props.size?.slice(1)}`
        ),
        ...props.InputLabelProps,
      }}
      FormHelperTextProps={{
        error: props.error,
        sx: {
          color: props.success ? "success.dark" : undefined,
        },
        ...props.FormHelperTextProps,
      }}
      helperText={
        props.helperText ? (
          <>
            <Body2
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              component="span"
            >
              {getHelperTextIcon(props)}
            </Body2>
            <Typography variant="caption" component="span" display="block">
              {props.helperText}
            </Typography>
          </>
        ) : null
      }
    />
  );
};

export const InputText = forwardRef(TextFieldComponent);
