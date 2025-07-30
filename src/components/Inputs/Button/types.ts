import type {LoadingButtonProps} from '@mui/lab/LoadingButton';
import type {ReactNode} from 'react';

export type ButtonProps = LoadingButtonProps & {
  title?: ReactNode | undefined;
};
