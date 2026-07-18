import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(80);
Config.setCodec("h264");
Config.setOverwriteOutput(true);

// Repli si le téléchargement de Chromium est bloqué par la policy réseau :
// décommenter et pointer un Chrome système.
// Config.setBrowserExecutable("/usr/bin/google-chrome");
