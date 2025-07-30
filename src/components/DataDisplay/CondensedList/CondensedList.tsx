import type {CondensedListProps} from './types';
import type {FunctionComponent} from 'react';

import {Box} from '@mui/material';

export const CondensedList: FunctionComponent<CondensedListProps> = (props) => {
  const {sx, children, ...restProps} = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Box>
  );
};
