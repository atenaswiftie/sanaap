import type {BadgeProps} from './types';
import type {TypographyProps} from '@mui/material';

export const styles = {
  root: {
    borderRadius: 1,
    display: 'inline-flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    width: 'fit-content',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
} as const;

interface BadgeDerivedStyles {
  root: BadgeProps['sx'];
  typography: TypographyProps['sx'];
}

export function getDerivedSizeStylesFromProps(size: BadgeProps['size']): BadgeDerivedStyles {
  switch (size) {
    case 'tiny':
      return {
        root: {
          height: 16,
          px: 3 / 8,
          [`svg`]: {
            fontSize: 12,
          },
        },
        typography: {typography: 'overline'},
      };
    case 'small':
      return {
        root: {
          height: 20,
          px: 0.5,
          [`svg`]: {
            fontSize: 16,
          },
        },
        typography: {typography: 'subtitle3'},
      };
    case 'large':
      return {
        root: {
          height: 32,
          px: 1,
          [`svg`]: {
            fontSize: 24,
          },
        },
        typography: {typography: 'subtitle1'},
      };
  }
  return {
    root: {
      height: 24,
      px: 1,
      [`svg`]: {
        fontSize: 20,
      },
    },
    typography: {typography: 'subtitle2'},
  };
}

export function getDerivedVariantStylesFromProps(variant: BadgeProps['variant'], color: BadgeProps['color']) {
  switch (variant) {
    case 'contained':
      return color === 'neutral'
        ? {
            bgcolor: 'text.secondary',
            color: 'primary.overlay',
          }
        : {
            bgcolor: `${color}.main`,
            color: `background.paper`,
          };
    case 'ghost':
      return color === 'neutral'
        ? {
            bgcolor: 'line.primary',
            color: 'text.secondary',
          }
        : {
            bgcolor: `${color}.overlay`,
            color: `${color}.main`,
          };
  }
  return color === 'neutral'
    ? {
        bgcolor: 'transparent',
        color: 'text.secondary',
      }
    : {
        bgcolor: 'transparent',
        color: `${color}.main`,
      };
}
