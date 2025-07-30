import type {ListItemContentProps} from '../ListItemContent/types';
import type {ListItemButtonProps as MuiListItemButtonProps} from '@mui/material';
import type {ListItemButtonTypeMap} from '@mui/material/ListItemButton/ListItemButton';

export type ListItemButtonProps = Omit<
  MuiListItemButtonProps<ListItemButtonTypeMap['defaultComponent'], {}>,
  'ref' | 'divider' | 'subheader' | 'title' | 'children' | 'secondaryAction'
> &
  ListItemContentProps;
