import type { PopUpActionsProps } from "./types";
import type { FunctionComponent } from "react";

import { Box, Button } from "@mui/material";

export const PopUpActions: FunctionComponent<PopUpActionsProps> = (props) => {
  return (
    <Box sx={{ pt: 2, display: "flex", gap: 1.5, "& button": { m: 0 } }}>
      {props.secondaryAction && (
        <Button
          fullWidth
          color="secondary"
          variant="ghost"
          {...props.secondaryAction}
        />
      )}
      {props.primaryAction && (
        <Button fullWidth color="secondary" {...props.primaryAction} />
      )}
    </Box>
  );
};
