let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));
languageConfig.compilers = {
  dart: {
    install: `brew tap dart-lang/dart && brew install dart`,
    command: "dart",
    args: "<file>",
    help: ``,
  },
};
module.exports = languageConfig;
