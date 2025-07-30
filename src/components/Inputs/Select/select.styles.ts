import type { Theme } from "@mui/material/styles";
import { makeStyles } from "@wallpay/styles";

export const useStyles = makeStyles()((theme: Theme) => {
  return {
    root: {
      "&.Mui-error": {
        "& .MuiFilledInput-root": {
          border: `1px solid ${theme.palette.error.main}`,
        },
      },

      "& .MuiFilledInput-root": {
        background: theme.palette?.line?.primary,
        "&:hover": {
          background: theme.palette.background.default,
        },
        "&::before , &::after": {
          display: "none",
        },
        border: `1px solid transparent`,
        "&.Mui-readOnly": {
          color: theme.palette.text.primary,
        },
        "&.Mui-focused ": {
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.background.paper,
          "& .MuiSelect-filled ": {
            backgroundColor: "inherit",
          },
        },
      },

      "& .MuiSelect-icon": {
        width: "16px",
        height: "16px",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        position: "absolute"
      }
    },
  };
});
