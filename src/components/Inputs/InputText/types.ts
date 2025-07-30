import type {TextFieldProps as MuiTextFieldProps} from '@mui/material';
import type {ReactNode} from 'react';

export interface InputTextProps extends Pick<MuiTextFieldProps, Exclude<keyof MuiTextFieldProps, 'variant' | 'label'>> {
  /**
   * If true, the label is displayed in success state.
   * boolean
   */
  success?: boolean;
  /**
   * If true, the textfield displayed in readonly state.
   * boolean
   */
  readOnly?: boolean;
  /**
   * the label of text input.
   */
  label?: ReactNode;
  disabled?: boolean;
  error?: MuiTextFieldProps['error'];
  variant?: 'outlined' | 'filled';
  // TODO: find better approach for bellow syntax
  size?: MuiTextFieldProps['size'] | 'tiny' | 'large';
  helperText?: string;
  type?: MuiTextFieldProps['type'];
  InputLabelProps?: MuiTextFieldProps['InputLabelProps']
}
