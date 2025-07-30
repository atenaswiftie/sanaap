import type {AlertProps} from './types';
import type {ForwardRefRenderFunction} from 'react';

import {Box, Alert as MuiAlert} from '@mui/material';
import {forwardRef} from 'react';

import {Caption, Subtitle2} from '../../DataDisplay/Typography';

const AlertComponent: ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
  const {title, description, ...rest} = props;

  return (
    <MuiAlert
      ref={ref}
      sx={{
        alignItems: title ? 'initial' : 'center',
        ...rest.sx,
      }}
      {...rest}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {!!title && <Subtitle2>{title}</Subtitle2>}
        {!!description && <Caption component="span">{description}</Caption>}
      </Box>
    </MuiAlert>
  );
};

export const Alert = forwardRef(AlertComponent);
