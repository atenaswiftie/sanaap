import type {BadgeProps} from './types';
import type {TypographyProps} from '@mui/material';
import type {FunctionComponent} from 'react';

import {Box} from '@mui/material';
import {useMemo} from 'react';

import {Typography} from '../Typography';

import {getDerivedSizeStylesFromProps, getDerivedVariantStylesFromProps, styles} from './styles';

export const Badge: FunctionComponent<BadgeProps> = (props) => {
  const {
    startIcon = null,
    label,
    endIcon = null,
    typographyProps,
    size = 'medium',
    variant = 'contained',
    color = 'success',
    sx,
    ...restProps
  } = props;

  const {root: rootStyles, typography: typographyStyles} = useMemo(() => {
    return getDerivedSizeStylesFromProps(size);
  }, [size]);

  const variantStyles = useMemo(() => {
    return getDerivedVariantStylesFromProps(variant, color);
  }, [variant, color]);

  return (
    <Box sx={{...styles.root, ...variantStyles, ...rootStyles, ...sx} as BadgeProps['sx']} {...restProps}>
      {startIcon}

      <Typography
        variant="inherit"
        component="span"
        color="inherit"
        {...typographyProps}
        sx={
          {
            ...typographyStyles,
            ...typographyProps?.sx,
            marginRight: endIcon ? 0.5 : 0,
            marginLeft: startIcon ? 0.5 : 0,
          } as TypographyProps['sx']
        }
      >
        {label}
      </Typography>

      {endIcon}
    </Box>
  );
};
