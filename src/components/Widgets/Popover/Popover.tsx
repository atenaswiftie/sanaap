import type { CastingBottomSheetProps, PopoverProps } from "./types";
import type { PopoverProps as MuiPopoverProps } from "@mui/material";
import type { FunctionComponent } from "react";

import { Popover as MuiPopover } from "@mui/material";

import { defaultAnchorProps } from "../../DataDisplay/Menu/constants";
import { BottomSheet } from "../../Navigation";
import { Hidden } from "@wallpay/components/DataDisplay";

export const Popover: FunctionComponent<PopoverProps> = (props) => {
  const { PopoverProps, BottomSheetProps, ...sharedProps } = props;

  return (
    <>
      <Hidden for="mobile">
        <MuiPopover
          {...defaultAnchorProps}
          {...(sharedProps as MuiPopoverProps)}
          {...(PopoverProps as MuiPopoverProps)}
        />
      </Hidden>

      <Hidden for="desktop">
        <BottomSheet
          {...(sharedProps as CastingBottomSheetProps)}
          {...BottomSheetProps}
        />
      </Hidden>
    </>
  );
};
