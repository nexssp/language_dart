let languageConfig = Object.assign({}, require("./dart.win32.nexss.config"));
const installDartScript = `${__dirname}/install/setupChannel.linux.sh`;

let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  //apt install -y apt-transport-https
  dart: {
    install: `curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list >> /etc/apt/sources.list.d/dart_stable.list
apt update -y
apt install -y dart`,
    command: "dart",
    args: "<file>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Arch Linux":
    languageConfig.compilers.dart.install = `${sudo}pacman -Sy --noconfirm dart`;
    break;
  default:
    languageConfig.compilers.dart.install = replaceCommandByDist(
      languageConfig.compilers.dart.install
    );
    break;
}

module.exports = languageConfig;
