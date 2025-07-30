import type {ReactElement, ReactNode} from 'react';
import type {TypographyProps} from '../Typography/types';

export interface ListItemContentProps {
  icon?: ReactElement;
  title?: string | ReactElement;
  description?: string | ReactElement;
  reverse?: boolean;
  widget?: ReactNode | ReactElement;
  responsiveIcon?: boolean;
  widgetProps?: TypographyProps;
}
