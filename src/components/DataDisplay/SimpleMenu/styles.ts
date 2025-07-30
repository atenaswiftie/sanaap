import type { Theme } from "@mui/material";
import { makeStyles } from "@wallpay/styles";

export const useStyles = makeStyles()((theme: Theme) => {
  return {
    root: {
      boxShadow: theme.elevations.level2,
      borderRadius: theme.shape.borderRadius * 2,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      margin: 0,
    },
  };
});
