import type {ListBoxProps} from './types';
import type {FunctionComponent} from 'react';

import {Box} from '@mui/material';

export const ListBox: FunctionComponent<ListBoxProps> = (props) => {
  const {children, sx, ...boxProps} = props;
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'line.primary',
        width: 1,
        borderRadius: 2,
        ...sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};
