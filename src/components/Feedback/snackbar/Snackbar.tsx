import {
  Alert,
  AlertProps,
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  Slide,
  SlideProps,
} from "@mui/material";

function TransitionDown(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

export type SnackbarProps = MuiSnackbarProps & {
  alertProps?: AlertProps;
};

export const Snackbar = ({
  children,
  message,
  alertProps,
  sx,
  ...restProps
}: SnackbarProps) => {
  return (
    <MuiSnackbar
      TransitionComponent={TransitionDown}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{
        top: { xs: 76 },
        ".MuiAlert-root": {
          borderRadius: 2,
          maxWidth: { xs: "100%", md: "600px" },
        },
        ...sx,
      }}
      autoHideDuration={4000}
      {...restProps}
    >
      {children || <Alert {...alertProps}>{message}</Alert>}
    </MuiSnackbar>
  );
};
