import type {ChipProps} from '@mui/material/Chip';
import type {ForwardRefRenderFunction} from 'react';

import {Chip as MuiChip} from '@mui/material';
import {forwardRef} from 'react';

const ChipComponent: ForwardRefRenderFunction<HTMLDivElement, ChipProps> = (props, ref) => {
  const {children, ...rest} = props;
  return (
    <MuiChip ref={ref} {...rest}>
      {children}
    </MuiChip>
  );
};

export const Chip = forwardRef(ChipComponent);
