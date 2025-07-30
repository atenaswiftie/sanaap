/* eslint-disable react-refresh/only-export-components */
import { AlertProps } from "@mui/material";
import { useCallback, useState } from "react";
import { Snackbar, SnackbarProps } from "./Snackbar";

type ShowSnackbarOptions = SnackbarProps & {
  severity?: AlertProps["severity"];
};

export let showSnackbar: (options: ShowSnackbarOptions) => void;
export let hideSnackbar: () => void;

export const SnackbarProvider = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ShowSnackbarOptions>();

  const show = useCallback((opts: ShowSnackbarOptions) => {
    setOpen(true);
    setOptions(opts);
  }, []);

  const hide = useCallback(() => {
    setOpen(false);
  }, []);

  showSnackbar = show;
  hideSnackbar = hide;

  return (
    <Snackbar
      onClose={hide}
      open={open}
      {...options}
      alertProps={{
        severity: options?.severity,
        ...options?.alertProps,
      }}
    />
  );
};
