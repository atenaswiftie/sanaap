import type {SwitchComponentProps} from './types';
import type {ForwardRefRenderFunction} from 'react';

import {Switch as MuiSwitch} from '@mui/material';
import {forwardRef} from 'react';

const SwitchComponent: ForwardRefRenderFunction<HTMLButtonElement, SwitchComponentProps> = (props, ref) => {
  return <MuiSwitch ref={ref} {...props} />;
};

export const Switch = forwardRef(SwitchComponent);
