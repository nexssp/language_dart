let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));
const installDartScript = `${__dirname}/install/setupChannel.linux.sh`;
languageConfig.compilers = {
  dart: {
    install: `bash ${installDartScript}`,
    command: "dart",
    args: "<file>",
    help: ``,
  },
};
module.exports = languageConfig;
