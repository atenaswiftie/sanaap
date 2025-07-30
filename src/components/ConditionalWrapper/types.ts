import type {PropsWithChildren, ReactElement} from 'react';

export type ConditionalWrapperProps = PropsWithChildren<{
  condition: boolean;
  wrapper: ReactElement | null;
}>;
