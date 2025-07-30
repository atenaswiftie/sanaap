import type { BottomSheetProps } from "./types";
import type { SwipeableDrawerProps } from "@mui/material/SwipeableDrawer/SwipeableDrawer";
import type { ForwardRefRenderFunction, SyntheticEvent } from "react";

import {
  Box,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SwipeableDrawer,
} from "@mui/material";
import { forwardRef, useCallback } from "react";

import { PopUpActions, PopUpHeader } from "./partials";
import useStyles from "./styles";

const BottomSheetComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  BottomSheetProps
> = (props, ref) => {
  const {
    showHeader = true,
    showCloseButton = true,
    showGrip = true,
    dialogContentProps,
    dialogTitleProps,
    headerTitle,
    headerSx,
    ...restProps
  } = props;

  const { classes } = useStyles();

  const handleClose = useCallback(
    (event: SyntheticEvent<{}, Event>) => {
      if (props.onClose) {
        props.onClose(event);
      }
    },
    [props]
  );

  const handleOpen = useCallback(
    (event: SyntheticEvent<{}, Event>) => {
      if (props.onOpen) {
        props.onOpen(event);
      }
    },
    [props]
  );

  const showPopUpActions = props.primaryAction || props.secondaryAction;

  return (
    <SwipeableDrawer
      ref={ref}
      {...(restProps as SwipeableDrawerProps)}
      anchor="bottom"
      disableSwipeToOpen={true}
      PaperProps={{
        className: classes.paper,
      }}
      open={props.open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      {showGrip && <Box className={classes.grip} />}

      {showHeader && (
        <PopUpHeader
          showCloseButton={showCloseButton}
          onClose={handleClose}
          widget={props.widget}
          title={headerTitle}
          headerSx={headerSx}
        />
      )}

      <DialogContent
        sx={{ p: 2, pt: headerTitle ? 0 : 2 }}
        {...dialogContentProps}
      >
        {!!props.title && (
          <DialogTitle
            variant="h5"
            color="text.primary"
            sx={{ mb: 1 }}
            {...dialogTitleProps}
          >
            {props.title}
          </DialogTitle>
        )}

        {!!props.children && (
          <DialogContentText
            component="span"
            sx={{ pb: showPopUpActions ? 2 : 0 }}
          >
            {props.children}
          </DialogContentText>
        )}

        {!!showPopUpActions && (
          <PopUpActions
            primaryAction={props.primaryAction}
            secondaryAction={props.secondaryAction}
          />
        )}
      </DialogContent>
    </SwipeableDrawer>
  );
};

export const BottomSheet = forwardRef(BottomSheetComponent);
