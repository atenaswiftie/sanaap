const shared = require("./.svgrrc.shared.cjs");

module.exports = {
  ...shared,
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-remove-jsx-attribute",
          {
            elements: ["svg"],
            attributes: ["id", "class", "title"],
          },
        ],
      ],
    },
  },
  icon: false,
  outDir: "src/icons/react/colored",
};
