import type {ListItemProps} from './types';
import type {FunctionComponent} from 'react';

import {ListItem as MuiListItem} from '@mui/material';

import {ListItemContent} from '../ListItemContent';

export const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const {icon, title, description, reverse, widget, widgetProps, ...restProps} = props;

  return (
    <MuiListItem {...restProps} divider={false}>
      <ListItemContent
        icon={icon}
        description={description}
        reverse={reverse}
        title={title}
        widget={widget}
        widgetProps={widgetProps}
      />
    </MuiListItem>
  );
};
