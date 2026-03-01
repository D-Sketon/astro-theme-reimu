import { BASE_URL, SITE_URL } from "./config";

export const urlFor = (path: string, absolute = false): string => {
  const base = BASE_URL === "/" ? "" : BASE_URL.replace(/\/$/, "");
  // if path is an absolute URL, return it directly
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }
  // if path is a relative URL like ./ or ../, return it directly
  if (/^(\.\/|\.\.\/)/.test(path)) {
    return path;
  }
  let relativePath = path;
  if (base && (relativePath === base || relativePath.startsWith(`${base}/`))) {
    relativePath = relativePath.slice(base.length) || "/";
  }

  let resolvedPath = "";
  // if path starts with a slash, treat it as root-relative
  if (relativePath.startsWith("/")) {
    resolvedPath = `${base}${relativePath}`;
  } else {
    // otherwise, treat it as relative to the base URL
    resolvedPath = `${base}/${relativePath}`;
  }

  if (!absolute) return resolvedPath;
  const siteRoot = `${SITE_URL}/`;
  return new URL(resolvedPath, siteRoot).toString();
};
