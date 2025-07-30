import type {ListItemButtonProps} from './types';
import type {FunctionComponent} from 'react';

import {ListItemButton as MuiListItemButton} from '@mui/material';

import {ListItemContent} from '../ListItemContent';

export const ListItemButton: FunctionComponent<ListItemButtonProps> = (props) => {
  const {icon, title, description, reverse, widget, ...restProps} = props;

  return (
    <MuiListItemButton {...restProps} divider={false}>
      <ListItemContent icon={icon} description={description} reverse={reverse} title={title} widget={widget} />
    </MuiListItemButton>
  );
};
