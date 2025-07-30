import { Switch, SwitchProps, styled } from "@mui/material";

export const WallpaySwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    transitionDuration: "300ms",

    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.secondary.main,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.background.default,
      },
    },

    "&.Mui-disabled": {
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.grey[400],
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.grey[700],
      },
    },

    "&.MuiSwitch-thumb": {
      backgroundColor: theme.palette.background.default,
    },
  },

  "& .MuiSwitch-track": {
    backgroundColor: theme.palette.grey[200],
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
