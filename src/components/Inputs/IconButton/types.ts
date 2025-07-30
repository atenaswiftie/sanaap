import type {BadgeProps, IconButtonProps as MuiIconButtonProps} from '@mui/material';
import type {IconButtonTypeMap} from '@mui/material/IconButton';

export type IconButtonProps = MuiIconButtonProps<IconButtonTypeMap['defaultComponent'], {}> & {
  /**
   * The variant to use.
   */
  variant?: 'standard' | 'circle';
  /**
   * Badges of icon button.
   */
  badge?: BadgeProps;

  style?: "border" | "plain" | "fill" | "text";
};
