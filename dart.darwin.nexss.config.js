let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));
const installDartScript = `${__dirname}/install/setupChannel.darwin.sh`;
languageConfig.compilers = {
  dart: {
    install: `bash ${installDartScript}`,
    command: "dart",
    args: "<file>",
    help: ``,
  },
};
module.exports = languageConfig;
