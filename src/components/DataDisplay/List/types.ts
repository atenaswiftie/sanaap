import type {ListProps as MuiListProps} from '@mui/material';
import type {ListTypeMap} from '@mui/material/List/List';
import type {ReactNode} from 'react';

export type ListProps = Omit<MuiListProps<ListTypeMap['defaultComponent'], {}>, 'children'> & {
  divider?: boolean;
  lastItemDivider?: boolean;
  children: ReactNode;
};
