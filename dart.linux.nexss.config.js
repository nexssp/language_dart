let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));
languageConfig.compilers = {
  dart: {
    install:
      "sudo apt-add-repository ppa:dartsim/ppa && sudo apt-get update && sudo apt-get install libdart6-all-dev",
    command: "dart",
    args: "<file>",
    help: ``,
  },
};
module.exports = languageConfig;
