import { CSSProperties } from "react";
import { makeStyles } from "@wallpay/styles";
import { Theme } from "@mui/material";

export default makeStyles()((theme: Theme) => ({
  simpleLabel: {
    position: "relative !important" as CSSProperties["position"],
    transform: "none !important",
    marginBottom: theme.spacing(1),
    pointerEvents: "initial",
    backgroundColor: "transparent !important",
  },
  readOnly: {
    ".MuiOutlinedInput-notchedOutline": {
        color: theme.palette.text.primary,
        boxShadow: "none",
        border: `1px dashed ${theme.palette.line.secondary}`,
      },
    "&, &:hover, &.Mui-focused": {
      ".MuiOutlinedInput-notchedOutline": {
        color: theme.palette.text.primary,
        boxShadow: "none",
        border: `1px dashed ${theme.palette.line.secondary}`,
      },
    },
  },
  labelContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  fill: {
    backgroundColor: theme.palette.line.primary,
    ".MuiOutlinedInput-notchedOutline": {
      borderWidth: 0,
      borderBottomWidth: 2,
      borderColor: "transparent",
    },
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "&.Mui-focused": {
      backgroundColor: theme.palette.background.default,
      ".MuiOutlinedInput-notchedOutline": {
        boxShadow: "none",
        border: "0 none",
        borderBottom: `2px solid ${theme.palette.primary.light}`,
      },
    },
    "&.Mui-focused.Mui-error": {
      ".MuiOutlinedInput-notchedOutline": {
        boxShadow: "none",
      },
    },
    "&.Mui-disabled": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    readOnlyNotched: {
      border: `1px dashed red`,
    },
  },
  fillReadOnly: {
    "&:hover": {
      backgroundColor: theme.palette.line.primary,
    },
  },
}));
