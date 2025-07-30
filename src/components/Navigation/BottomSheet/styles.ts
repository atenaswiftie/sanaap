import { makeStyles } from "@wallpay/styles";

const useStyles = makeStyles()((theme) => {
  return {
    paper: {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      boxShadow: "none",
      maxHeight: "calc(100% - 56px)",
      backgroundColor: theme.palette.background.default,
      maxWidth: 444,
      margin: "0 auto",
    },
    grip: {
      position: "absolute",
      width: 64,
      height: 4,
      top: 8,
      left: 0,
      right: 0,
      margin: "0 auto",
      borderRadius: 8,
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export default useStyles;
