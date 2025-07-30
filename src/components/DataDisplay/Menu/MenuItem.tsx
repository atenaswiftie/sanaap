import type {MenuItemProps as MuiMenuItemProps} from '@mui/material';
import type {HTMLAttributeAnchorTarget} from 'react';

import {ListItemSecondaryAction, MenuItem as MuiMenuItem} from '@mui/material';
import React, {forwardRef} from 'react';

import {Checkmark} from '@wallpay/icons';

import {useStyles} from './MenuItem.styles';

export interface MenuItemProps extends MuiMenuItemProps {
  destructive?: boolean;
  component?: React.ElementType;
  target?: HTMLAttributeAnchorTarget;
  icon?: React.ReactNode;
  selected?: boolean;
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(
  {children, destructive = false, selected = false, className, ...restProps},
  ref,
) {
  const {classes, cx} = useStyles();

  return (
    <MuiMenuItem
      className={cx(className, {
        [classes.selected]: selected,
        [classes.destructive]: destructive,
      })}
      selected={selected}
      ref={ref}
      {...restProps}
    >
      {children}
      {selected && (
        <ListItemSecondaryAction sx={{right: 8}}>
          <Checkmark className={classes.checkedIcon} />
        </ListItemSecondaryAction>
      )}
    </MuiMenuItem>
  );
});
