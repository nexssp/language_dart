let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));
const installDartScript = `${__dirname}/install/setupChannel.linux.sh`;
const sudo = process.sudo;

languageConfig.compilers = {
  //apt install -y apt-transport-https
  dart: {
    install: `${sudo}curl https://dl-ssl.google.com/linux/linux_signing_key.pub | ${sudo}apt-key add -
${sudo}test -f /etc/apt/sources.list.d/dart_stable.list && grep -qxF 'download.dartlang.org/linux/debian stable main' /etc/apt/sources.list.d/dart_stable.list || ${sudo}curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list >> /etc/apt/sources.list.d/dart_stable.list
${sudo}apt update -y               
${sudo}apt install -y dart`,
    command: "dart",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ARCH:
    languageConfig.compilers.dart.install = `${sudo}pacman -Sy --noconfirm dart`;
    break;
  default:
    languageConfig.compilers.dart.install = process.replacePMByDistro(
      languageConfig.compilers.dart.install
    );
    break;
}

module.exports = languageConfig;
