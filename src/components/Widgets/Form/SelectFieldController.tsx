import type { SelectComponentProps } from "@wallpay/components/Inputs/Select/types";
import type { ForwardRefRenderFunction } from "react";

import { forwardRef } from "react";

import { InputText } from "@wallpay/components/Inputs/InputText";

import { useStyles } from "@wallpay/components/Inputs/Select/select.styles";
import { LinearArrowDownFill } from "@wallpay/icons";
import { InputLabel } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const SelectComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectComponentProps
> = (props, ref) => {
  const { outline = true, slotProps, label, name, ...rest } = props;
  const { classes } = useStyles();
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputText
            {...field}
            {...rest}
            className={`${classes.root} ${props.error ? "Mui-error" : ""}`}
            select
            variant={outline ? "outlined" : "filled"}
            ref={ref}
            margin={"none"}
            error={!!error}
            color={props.valid ? "success" : props.color}
            helperText={error?.message?.toString() || props.helperText}
            slotProps={{
              ...slotProps,
              select: {
                IconComponent: LinearArrowDownFill,
                sx: {
                  "& .MuiSelect-icon": {
                    width: 20,
                    height: 20,
                    fontSize: 20,
                  },
                },
              },
            }}
            sx={{
              marginTop: label ? "5px !important" : "0",
            }}
          />
        )}
      />
    </>
  );
};

export const SelectFieldController = forwardRef(SelectComponent);
