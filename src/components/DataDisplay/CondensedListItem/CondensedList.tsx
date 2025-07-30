import type {CondensedListItemProps} from './types';
import type {FunctionComponent} from 'react';

import {Box} from '@mui/material';

import {Body2} from '../../DataDisplay/Typography';

export const CondensedListItem: FunctionComponent<CondensedListItemProps> = (props) => {
  const {title, widget, sx, widgetProps, ...restProps} = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 1,
        color: 'text.primary',
        ...sx,
      }}
      {...restProps}
    >
      <Body2 component="div">{title}</Body2>
      <Body2 component="div" {...widgetProps}>
        {widget}
      </Body2>
    </Box>
  );
};
