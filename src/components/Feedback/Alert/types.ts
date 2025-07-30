import type {AlertProps as MuiAlertProps} from '@mui/lab';
import type {AlertColor} from '@mui/material/Alert/Alert';
import type {ReactNode} from 'react';

export type AlertProps = {
  /**
   * Subtitle of alert.
   */
  description?: ReactNode;
  /**
   * Subtitle of alert.
   */
  title?: ReactNode;
  /**
   * The icon of alert
   */
  icon?: ReactNode;
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: AlertColor;
} & Omit<MuiAlertProps, 'title'>;
