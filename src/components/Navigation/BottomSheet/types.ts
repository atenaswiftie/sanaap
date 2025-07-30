import type {ButtonProps} from '../../Inputs/Button/types';
import type {DialogContentProps, DialogTitleProps, SwipeableDrawerProps, SxProps} from '@mui/material';
import type {ReactNode} from 'react';

export interface BottomSheetProps
  extends Pick<SwipeableDrawerProps, Exclude<keyof SwipeableDrawerProps, 'title' | 'onOpen'>> {
  open: boolean;
  title?: ReactNode;
  /**
   * if its false header (Xmark button and widget) will be removed.
   * @default true
   */
  showHeader?: boolean;
  headerTitle?: ReactNode;
  /**
   * a widget which placed at top of drawer in front of Xmark icon
   */
  widget?: ReactNode;
  /**
   * primary action button's props as ButtonProps
   */
  primaryAction?: ButtonProps;
  /**
   * secondary action button's props as ButtonProps
   */
  secondaryAction?: ButtonProps;
  onOpen?: SwipeableDrawerProps['onOpen'];
  showCloseButton?: boolean;
  showGrip?: boolean;
  dialogContentProps?: DialogContentProps;
  dialogTitleProps?: DialogTitleProps;
  headerSx?: SxProps;
}
