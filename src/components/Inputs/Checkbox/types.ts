import type {CheckboxProps} from '@mui/material';
import type {ReactElement} from 'react';

export interface CheckboxComponentProps extends Omit<CheckboxProps, 'color'> {
  /**
   * Label of Checkbox.
   */
  label?: string | ReactElement;
  disabled?: CheckboxProps['disabled'];
  checked?: CheckboxProps['checked'];
  size?: CheckboxProps['size'];
  color?: 'secondary' | 'primary';
}
