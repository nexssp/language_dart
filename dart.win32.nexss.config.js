let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Dart";
languageConfig.description =
  "Dart is a client-optimized language for fast apps on any platform.";
languageConfig.url = "https://dart.dev/";
languageConfig.extensions = [".dart"];
languageConfig.executeCommandLine = "dart";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "dart";
languageConfig.builders = {};
languageConfig.compilers = {
  dart: {
    install:
      "scoop bucket add java && scoop install openjdk dart && scoop reset dart", // scoop reset dart ? didn't work from standard install
    command: "dart",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.dart.errors");
languageConfig.languagePackageManagers = {
  pub: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "pub deps",
    search: "pub search",
    install: "pub install",
    uninstall: "pub uninstall",
    help: "pub help",
    version: "pub --version",
    init: () => {
      // if (
      //   !require("fs").existsSync(
      //     require("path").join(process.cwd(), "package.json")
      //   )
      // ) {
      //   require("child_process").execSync("nimble init", { stdio: "inherit" });
      //   console.log("initialized npm project.");
      // } else {
      //   console.log("npm already initialized.");
      // }
    },
    // if command not found in specification
    // run directly on package manager
    else: "pub"
  }
};

module.exports = languageConfig;
