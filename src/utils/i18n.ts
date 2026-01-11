
import en from "../languages/en";
import ja from "../languages/ja";
import zhCn from "../languages/zh-cn";
import zhTw from "../languages/zh-tw";

import { SITE } from "./config";

const language = SITE.language.toLowerCase();

const languages = ["en", "ja", "zh-cn", "zh-tw"];

let i18n: Record<string, any> = {};

const langMap: Record<string, any> = {
  "en": en,
  "ja": ja,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
};

if (languages.includes(language)) {
  i18n = langMap[language] || en;
} else {
  i18n = en;
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
  if (typeof params === "number" || !isNaN(Number(params))) {
    if (typeof result === "string") {
      // @ts-expect-error - ignore
      return result.replace("%s", params) || key;
    }
    if (Number(params) <= 1) {
      return result?.one?.replace("%s", params) || key;
    } else {
      return result?.other?.replace("%s", params) || key;
    }
  } else {
    if (typeof result === "string") {
      // @ts-expect-error - ignore
      return result.replace("%s", params) || key;
    }
    return result?.other?.replace("%s", params) || key;
  }
};

export const getI18n = (): Record<string, any> => {
  return i18n;
};