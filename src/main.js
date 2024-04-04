import figlet from "figlet";
import gradient from "gradient-string";
import terminalLink from "terminal-link";

import {data, figletOptions} from "./data.js";

const title = figlet.textSync(data.figlet, figletOptions);
const colorLog = gradient.pastel;

export function writeInfo() {
  console.info(colorLog.multiline(title));

  for (const info of Object.entries(data)) {
    const [key, value] = info;
    if (key === "github") {
      console.info(
        `${colorLog(`${key}:`)} ${terminalLink(
          value,
          `https://github.com/${value}`,
        )}`,
      );
      continue
    }
    if (key === "linkedin") {
      console.info(
        `${colorLog(`${key}:`)} ${terminalLink(
          value,
          `https://linkedin.com/in/${value}`,
        )}`,
      );
      continue

    }
    console.info(`${colorLog(`${key}:`)} ${value}`);
  }
}