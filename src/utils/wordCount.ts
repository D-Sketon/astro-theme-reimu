import { getCollection } from "astro:content";
import stripHTML from "./stripHTML";

const counter = (content: string) => {
  content = stripHTML(content);
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (
    content
      .replace(/[\u4E00-\u9FA5]/g, "")
      .match(
        /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g
      ) || []
  ).length;
  return [cn, en];
};

const countFn = (content: string) => {
  let len = counter(content);
  return len[0] + len[1];
};

export const wordCount = (content: string) => {
  const totalWords = countFn(content);
  return totalWords < 1000
    ? totalWords
    : Math.round(totalWords / 100) / 10 + "k";
};

export const totalCount = async () => {
  const blogs = await getCollection("blog");
  const totalWords = blogs.reduce((acc, post) => {
    return acc + (post.body ? countFn(post.body) : 0);
  }, 0);
  return totalWords < 1000
    ? totalWords
    : Math.round(totalWords / 100) / 10 + "k";
};

const changeHourMinuteStr = (_str: string) => {
  if (_str !== "0" && _str !== "" && _str !== null) {
    const str = Number(_str)
    return (
      (Math.floor(str / 60).toString().length < 2
        ? "0" + Math.floor(str / 60).toString()
        : Math.floor(str / 60).toString()) +
      ":" +
      ((str % 60).toString().length < 2
        ? "0" + (str % 60).toString()
        : (str % 60).toString())
    );
  } else {
    return "";
  }
};
const timeFn = (content: string, { cn = 300, en = 160 } = {}) => {
  let len = counter(content);
  let readingTime = len[0] / cn + len[1] / en;
  return readingTime < 1 ? 1 : parseInt(readingTime + "", 10);
};

export const readingTime = (content: string) => {
  return timeFn(timeFn(content) + "");
};

export const totalReadingTime = async () => {
  const blogs = await getCollection("blog");
  const totalReadingTime = blogs.reduce((acc, post) => {
    return acc + timeFn(post.body);
  }, 0);
  return changeHourMinuteStr(totalReadingTime + "");
}