import type { StepIconProps as MuiStepIconProps } from "@mui/material";
import type { FunctionComponent } from "react";

import { StepIcon } from "@mui/material";
import {
  CheckmarkCircleFill,
  CheckmarkThick,
  ExclamationMarkTriangleFill,
  XmarkOctagonFill,
} from "@wallpay/icons";

export type StepIconProps = MuiStepIconProps & {
  warning?: boolean;
  passed?: boolean;
  error?: boolean;
  success?: boolean;
};

const getIconByProps = (props: StepIconProps) => {
  if (props.completed) {
    return <CheckmarkThick />;
  }

  if (props.warning) {
    return <ExclamationMarkTriangleFill />;
  }

  if (props.passed) {
    return <CheckmarkCircleFill />;
  }

  if (props.error) {
    return <XmarkOctagonFill />;
  }

  if (props.success) {
    return <CheckmarkCircleFill />;
  }

  return props.icon;
};

export const StepLabelIcon: FunctionComponent<StepIconProps> = (props) => {
  return <StepIcon icon={getIconByProps(props)} className={props.className} />;
};
