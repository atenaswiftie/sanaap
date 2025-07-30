import type { BoxProps } from "@mui/material";
import type { FunctionComponent } from "react";

import { Box, CircularProgress } from "@mui/material";

export const CircularLoading: FunctionComponent<BoxProps> = (props) => {
  return (
    <Box
      {...props}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        ...props.sx,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
