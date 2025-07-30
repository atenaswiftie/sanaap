import type {InputTextProps} from '../InputText/types';
import type {ForwardRefRenderFunction} from 'react';

import {forwardRef} from 'react';

import {InputText} from '../InputText';

import {NumberFormat} from './NumberFormat';

const InputNumberComponent: ForwardRefRenderFunction<HTMLDivElement, Omit<InputTextProps, 'type'>> = (props, ref) => {
  return (
    <InputText
      {...props}
      ref={ref}
      InputProps={{
        ...props.InputProps,
        inputComponent: NumberFormat as any,
        inputMode: 'decimal',
      }}
    />
  );
};

export const InputNumber = forwardRef(InputNumberComponent);
