/** @type {import('svgo/lib/svgo').Config} */

const template = (variables, options) => {
  return options.tpl`
 import type {ComponentProps} from 'react';
 
 import {createElement} from 'react';
 import {SvgIcon} from '@mui/material';
 
${variables.interfaces};

const ${variables.componentName} = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(SvgIcon, props, ${variables.jsx})
};


${variables.exports};
`;
};

module.exports = template;
