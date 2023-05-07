let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));

languageConfig.compilers = {
  //apt install -y apt-transport-https
  dart: {
    install: `pkg install -y dart`,
    command: "dart",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

module.exports = languageConfig;
