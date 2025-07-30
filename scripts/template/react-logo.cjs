/** @type {import('svgo/lib/svgo').Config} */

const template = (variables, options) => {
  return options.tpl`
${variables.imports};
  
${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {
  return ${variables.jsx}
};


${variables.exports};
`;
};

module.exports = template;
