import type { TypographyProps } from "./types";
import type { FunctionComponent } from "react";

import MuiTypography from "@mui/material/Typography";

export const Typography: FunctionComponent<TypographyProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTypography {...rest}>{children}</MuiTypography>;
};
