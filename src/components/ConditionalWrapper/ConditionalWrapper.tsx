import type {ConditionalWrapperProps} from './types';
import type {FunctionComponent} from 'react';

import {cloneElement, Fragment, memo} from 'react';

const ConditionalWrapperComponent: FunctionComponent<ConditionalWrapperProps> = (props) => {
  const children = <Fragment key="children">{props.children}</Fragment>;

  if (props.condition && props.wrapper) {
    return cloneElement(props.wrapper, {children});
  }

  return children;
};

export const ConditionalWrapper = memo(ConditionalWrapperComponent);
