const shared = require("./.svgrrc.shared.cjs");

module.exports = {
  ...shared,
  outDir: "src/icons/react/fill",
  replaceAttrValues: {
    "#000": "currentColor",
    "#476185": "currentColor",
  },
};
