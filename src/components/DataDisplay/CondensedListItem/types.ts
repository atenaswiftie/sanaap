import type {BoxProps} from '@mui/material';
import type {ReactNode} from 'react';
import type { TypographyProps } from '../Typography/types';

export type CondensedListItemProps = Omit<BoxProps, 'title'> & {
  title: ReactNode;
  widget?: ReactNode;
  widgetProps?: TypographyProps
};
