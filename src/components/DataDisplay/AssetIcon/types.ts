import type {SvgIcon} from '@mui/material';
import type {ComponentProps} from 'react';

export interface AssetIconProps extends ComponentProps<typeof SvgIcon> {
  symbol: string | undefined;
}
