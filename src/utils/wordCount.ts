import { getCollection } from "astro:content";
import getReadingTime from 'reading-time';

export const wordCount = (content: string) => {
  const totalWords = getReadingTime(content).words;
  return totalWords < 1000
    ? totalWords
    : Math.round(totalWords / 100) / 10 + "k";
};

export const totalCount = async () => {
  const blogs = await getCollection("blog");
  const totalWords = blogs.reduce((acc, post) => {
    return acc + (post.body ? getReadingTime(post.body).words : 0);
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

export const readingTime = (content: string) => {
  return Math.round(getReadingTime(content).minutes);
};

export const totalReadingTime = async () => {
  const blogs = await getCollection("blog");
  const totalReadingTime = blogs.reduce((acc, post) => {
    return acc + getReadingTime(post.body).minutes;
  }, 0);
  return changeHourMinuteStr(Math.round(totalReadingTime) + "");
}