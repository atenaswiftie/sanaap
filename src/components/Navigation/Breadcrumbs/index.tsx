import type {BreadcrumbsProps} from '@mui/material/Breadcrumbs';
import type {ForwardRefRenderFunction} from 'react';

import {Breadcrumbs as MuiBreadcrumbs} from '@mui/material';
import {forwardRef} from 'react';

const BreadcrumbsComponent: ForwardRefRenderFunction<HTMLDivElement, BreadcrumbsProps> = (props, ref) => {
  const {children, ...rest} = props;
  return (
    <MuiBreadcrumbs ref={ref} {...rest}>
      {children}
    </MuiBreadcrumbs>
  );
};

export const Breadcrumbs = forwardRef(BreadcrumbsComponent);
