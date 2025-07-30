import type { StepperProps } from "./types";
import type { FunctionComponent } from "react";

import { Stepper as MuiStepper } from "@mui/material";
import { clsx } from "clsx";

export const Stepper: FunctionComponent<StepperProps> = (props) => {
  const { alternativeLabel, ...otherProps } = props;

  return (
    <MuiStepper
      {...otherProps}
      className={clsx(props.className, {
        "MuiStepper-column-items": alternativeLabel,
      })}
    />
  );
};
