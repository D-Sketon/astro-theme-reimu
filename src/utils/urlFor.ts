import { BASE_URL } from "./config";

export const urlFor = (path: string): string => {
  // if path is an absolute URL, return it directly
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }
  // if path is a relative URL like ./ or ../, return it directly
  if (/^(\.\/|\.\.\/)/.test(path)) {
    return path;
  }
  // if path starts with a slash, treat it as root-relative
  if (path.startsWith("/")) {
    return `${BASE_URL}${path}`;
  }
  // otherwise, treat it as relative to the base URL
  return `${BASE_URL}/${path}`;
};
