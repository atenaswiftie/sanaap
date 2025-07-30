import type { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    simple: true;
  }
}

export const MuiPaper = (theme: Theme): Components["MuiPaper"] => ({
  defaultProps: { variant: "simple" },
  styleOverrides: {
    outlined: {
      border: `1px solid ${theme.palette.line.primary}`,
      borderRadius: theme.spacing(2),
    },
    elevation: {
      boxShadow: theme.elevations.level2,
      backgroundImage: "none",
      borderRadius: theme.spacing(2),
    },
  },
  variants: [
    {
      props: { variant: "simple" },
      style: {
        border: "none",
        boxShadow: "none",
        borderRadius: theme.spacing(2),
      },
    },
  ],
});
