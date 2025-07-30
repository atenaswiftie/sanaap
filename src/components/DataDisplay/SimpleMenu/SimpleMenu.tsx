/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { SimpleMenuProps } from "./types";
import type { FunctionComponent } from "react";

import { Box } from "@mui/material";

import { useStyles } from "./styles";

export const SimpleMenu: FunctionComponent<SimpleMenuProps> = (props) => {
  const { classes } = useStyles();
  const { children, ...restProps } = props;

  return (
    // @ts-ignore
    <Box className={classes.root} component="ul" {...restProps}>
      {children}
    </Box>
  );
};
