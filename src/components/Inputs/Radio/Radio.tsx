import type { ForwardRefRenderFunction } from "react";
import type { RadioComponentProps } from "./types";

import { FormControlLabel, Radio as MuiRadio } from "@mui/material";
import { forwardRef } from "react";

const RadioComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  RadioComponentProps
> = ({sx, ...props}, ref) => {
  return (
    <FormControlLabel
      sx={sx}
      control={
        <MuiRadio
          {...props}
          color="secondary"
          sx={{
            color: "grey.300",
            "&.Mui-checked": {
              color: "secondary.main",
            },
            "& .MuiSvgIcon-root": {
              fontSize: 18,
            },
          }}
          ref={ref}
        />
      }
      label={props.label}
      slotProps={{
        typography: { variant: "body2" },
      }}
    />
  );
};

export const Radio = forwardRef(RadioComponent);
