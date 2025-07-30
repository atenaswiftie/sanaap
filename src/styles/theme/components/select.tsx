import type { ElementType } from "react";
import type { Components, Theme } from "@mui/material";
import { listItemTextClasses, SvgIcon } from "@mui/material";
import { ArrowDropDown } from "@wallpay/icons";

const IconComponent: ElementType = (props) => (
  <SvgIcon component={ArrowDropDown} {...props} />
);

export const MuiSelect = (theme: Theme): Components["MuiSelect"] => ({
  defaultProps: {
    IconComponent,
    MenuProps: {
      disableRestoreFocus: false,
    },
  },
  styleOverrides: {
    root: {
      ...theme.typography.body2,
      color: theme.palette.text.primary,
    },
    select: {
      [`.${listItemTextClasses.root}`]: {
        marginTop: 0,
        marginBottom: 0,
      },
      [`.${listItemTextClasses.primary}`]: {
        fontSize: "inherit",
        lineHeight: "inherit",
      },
    },
    icon: {
      color: theme.palette.text.secondary,
    },
  },
});
