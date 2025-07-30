import type { BottomSheetProps } from "../../Navigation/BottomSheet/types";
import type { MenuProps as MuiMenuProps } from "@mui/material";

import { MenuList, Menu as MuiMenu } from "@mui/material";

import { BottomSheet } from "../../Navigation/BottomSheet";

import { defaultAnchorProps } from "./constants";
import { useStyles } from "./Menu.styles";
import { Hidden } from "../hidden";

export type MenuProps = MuiMenuProps & BottomSheetProps;

export const Menu = (props: MenuProps) => {
  const { classes } = useStyles();
  return (
    <>
      <Hidden for="mobile">
        <MuiMenu {...defaultAnchorProps} {...props} />
      </Hidden>
      <Hidden for="desktop">
        <BottomSheet {...props}>
          <MenuList className={classes.list}>{props.children}</MenuList>
        </BottomSheet>
      </Hidden>
    </>
  );
};
