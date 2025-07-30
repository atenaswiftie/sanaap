import type {ListItemContentProps} from '../ListItemContent/types';
import type {ListItemProps as MuiListItemProps} from '@mui/material';

export type ListItemProps = Omit<
  MuiListItemProps<'li', {}>,
  'ref' | 'divider' | 'subheader' | 'title' | 'secondaryAction' | 'children'
> &
  ListItemContentProps;
