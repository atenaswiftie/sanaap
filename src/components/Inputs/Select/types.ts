import type {TextFieldProps as MuiTextFieldProps, SelectProps} from '@mui/material';

export interface SelectComponentProps extends Omit<MuiTextFieldProps & SelectProps, 'variant'> {
  /**
   * If true, the component is displayed in outline state.
   * boolean
   */
  outline?: boolean;
  name: string;
  valid?: boolean;
  size?: MuiTextFieldProps['size'] | 'tiny' | 'large';
  helperText?: string;
  error?: MuiTextFieldProps['error'];
  fullWidth?: MuiTextFieldProps['fullWidth'];
  disabled?: MuiTextFieldProps['disabled'];
  readOnly?: boolean;
  success?: boolean;
}
