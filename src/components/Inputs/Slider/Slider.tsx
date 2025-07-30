import type {SliderProps} from '@mui/material';
import type {ForwardRefRenderFunction} from 'react';

import {Slider as MuiSlider} from '@mui/material';
import {forwardRef} from 'react';

const SliderComponent: ForwardRefRenderFunction<HTMLButtonElement, SliderProps> = (props, ref) => {
  return <MuiSlider ref={ref} {...props} />;
};

export const Slider = forwardRef(SliderComponent);
