import type {BoxProps, TypographyProps} from '@mui/material';
import type {ReactNode} from 'react';

export interface BadgeProps extends BoxProps {
  startIcon?: ReactNode;
  label: string;
  endIcon?: ReactNode;
  typographyProps?: TypographyProps;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  variant?: 'contained' | 'ghost' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral';
}
