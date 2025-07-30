import type { PopUpHeaderProps } from "./types";
import type { FunctionComponent } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import { Xmark } from "@wallpay/icons";

export const PopUpHeader: FunctionComponent<PopUpHeaderProps> = (props) => {
  const { showCloseButton = true, headerSx } = props;

  return (
    <Box sx={{ p: props.title ? 1.5 : 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: props.title ? "flex-start" : "space-between",
          alignItems: "center",
          ...headerSx,
        }}
      >
        {props.widget && (
          <Box display="flex" justifyContent="flex-end">
            {props.widget}
          </Box>
        )}

        {props.title && (
          <Typography
            variant="h6"
            sx={{
              paddingLeft: props.widget || showCloseButton ? 5 : 0,
              flex: 1,
              textAlign: "center",
            }}
            color="text.primary"
          >
            {props.title}
          </Typography>
        )}

        {showCloseButton && (
          <IconButton
            sx={{
              p: 0.75,
              fontSize: (theme) => {
                return theme.spacing(2.5);
              },
            }}
            onClick={(event) => {
              props.onClose(event);
            }}
          >
            <Xmark fontSize="inherit" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
