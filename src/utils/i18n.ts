import fs from "fs";
import yaml from "js-yaml";

import { SITE } from "./config";

const language = SITE.language.toLowerCase();

const languages = ["en", "ja", "zh-cn", "zh-tw"];

let i18n: Record<string, any> = {};

if (languages.includes(language)) {
  i18n = yaml.load(
    fs.readFileSync(`src/languages/${language}.yml`, "utf8")
  ) as Record<string, any>;
} else {
  i18n = yaml.load(fs.readFileSync(`src/languages/en.yml`, "utf8")) as Record<
    string,
    any
  >;
}

export const __ = (key: string): string => {
  const keys = key.split(".");
  let result = i18n;
  for (let k of keys) {
    result = result[k];
  }
  return result as unknown as string || key;
};

export const _p = (key: string, params: string | number): string => {
  const keys = key.split(".");
  let result = i18n;
  for (let k of keys) {
    result = result[k];
  }
  if (typeof params === "number" || !isNaN(parseInt(params))) {
    if (params === 1) {
      return result?.one?.replace("%d", params) || key;
    } else {
      return result?.other?.replace("%d", params) || key;
    }
  } else {
    return result?.replace("%s", params) || key;
  }
};
