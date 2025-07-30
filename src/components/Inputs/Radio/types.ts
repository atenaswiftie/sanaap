import type {RadioProps} from '@mui/material';
import type {ReactElement} from 'react';

export interface RadioComponentProps extends Omit<RadioProps, 'color'> {
  /**
   * Label of Radio.
   */
  label?: string | ReactElement;
  disabled?: RadioProps['disabled'];
  checked?: RadioProps['checked'];
  size?: RadioProps['size'];
  color?: 'secondary' | 'primary';
}
