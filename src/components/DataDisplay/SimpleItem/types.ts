import type {MenuItemProps} from '../Menu';
import type {BoxProps, ListItemTextProps} from '@mui/material';
import type {ReactNode} from 'react';

export interface SimpleItemType extends Omit<BoxProps, 'title'> {
  title: ReactNode;
  icon?: ReactNode;
  widget?: ReactNode;
  subtitle?: ReactNode;
  primaryTypographyProps?: ListItemTextProps['primaryTypographyProps'];
  menuItemProps?: MenuItemProps;
  disabled?: boolean;
  disableSelection?: boolean;
}
