import type { Components } from "@mui/material/styles";
import { Radio, RadioFill } from "@wallpay/icons";
export const MuiRadio: Components["MuiRadio"] = {
  defaultProps: {
    icon: <Radio />,
    checkedIcon: <RadioFill />,
  },
  styleOverrides: {
    root: {
      padding: 4,
      marginRight: 8,
    },
  },
};
