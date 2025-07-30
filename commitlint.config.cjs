module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "redesign",
      ],
    ],
    "subject-case": [0],
    "header-max-length": [2, "always", 100],
    "header-min-length": [2, "always", 10],
    "scope-case": [0],
    "body-max-line-length": [2, "always", 100],
  },
};
