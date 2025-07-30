import { makeStyles } from "../../../styles";

interface StyleProps {
  color:
    | "error"
    | "info"
    | "success"
    | "secondary"
    | "primary"
    | "warning"
    | "inherit"
    | "default";
}

export const useStyles = makeStyles<StyleProps>()((theme, { color }) => {
  return {
    circle: {
      borderRadius: "50%",
      backgroundColor: "transparent",
    },
    border: {
      border: "1px solid",
      borderColor:
        theme.palette[
          color === "inherit" || color === "default" ? "primary" : color
        ].main,
      backgroundColor: theme.palette.background.paper,
    },
    plain: {
      backgroundColor: "transparent",
    },
    fill: {
      backgroundColor:
        theme.palette[
          color === "inherit" || color === "default" ? "primary" : color
        ].overlay,
      borderRadius: theme.spacing(1),
    },
    text: {
      backgroundColor: "transparent",
    },
  };
});
