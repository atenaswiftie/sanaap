import type { Components } from "@mui/material/styles"

export const MuiModal: Components["MuiModal"] = {
  defaultProps: {
    disableRestoreFocus: true,
  },
  styleOverrides: {
    root: {
      direction: "ltr",
    },
  },
}
