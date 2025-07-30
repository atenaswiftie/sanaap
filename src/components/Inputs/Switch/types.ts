import type {SwitchProps} from '@mui/material';

export interface SwitchComponentProps extends SwitchProps {
  /**
   * Label of Switch.
   */
  disabled?: SwitchProps['disabled'];
  size?: SwitchProps['size'] | 'large';
  color?: 'secondary' | 'primary';
}
