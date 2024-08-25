import fs from "fs";
import yaml from "js-yaml";

export interface SiteConfig {
  url: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string | string[];
  author: string;
  language: string;
  timezone: string;
}

export interface FooterConfig {
  since: number;
  powered: boolean;
  count: boolean;
  busuanzi: boolean;
}

export interface AnalyticsConfig {
  baidu_analytics: string | false;
  google_analytics: string | false;
  clarity: string | false;
}

export interface SocialConfig {
  github?: string;
  google?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  pinterest?: string;
  youtube?: string;
  vimeo?: string;
  flickr?: string;
  dribbble?: string;
  behance?: string;
  bilibili?: string;
  weibo?: string;
  zhihu?: string;
  douban?: string;
  reddit?: string;
  tumblr?: string;
  medium?: string;
  deviantart?: string;
  stackoverflow?: string;
  telegram?: string;
  discord?: string;
  steam?: string;
}

export interface ValineConfig {
  enable: boolean;
  appId: string;
  appKey: string;
  pageSize: number;
  avatar: string;
  lang: string;
  placeholder: string;
  guest_info: string;
  recordIP: boolean;
  highlight: boolean;
  visitor: boolean;
}

export interface WalineConfig {
  enable: boolean;
  serverURL: string;
  lang: string;
  locale: any;
  emoji: string[];
  meta: string[];
  requiredMeta: string[];
  wordLimit: number;
  placeholder: number;
  pageview: boolean;
}

export interface GitalkConfig {
  enable: boolean;
  clientID: string;
  clientSecret: string;
  repo: string;
  owner: string;
  admin: string[];
}

export interface FriendConfig {
  name: string;
  avatar: string;
  url: string;
  desc: string;
}

export interface CopyrightConfig {
  enable: boolean;
  content: {
    author: boolean;
    link: boolean;
    title: boolean;
    date: boolean;
    updated: boolean;
    license: boolean;
  }
}

const config = yaml.load(fs.readFileSync("src/config.yml", "utf8")) as {
  site: SiteConfig;
  footer: FooterConfig;
  analytics: AnalyticsConfig;
  social: SocialConfig;
  valine: ValineConfig;
  waline: WalineConfig;
  gitalk: GitalkConfig;
  friend: FriendConfig[];
  copyright: CopyrightConfig;
};

export const SITE = config.site;
export const FOOTER = config.footer;
export const ANALYTICS = config.analytics;
export const SOCIAL = config.social;
export const VALINE = config.valine;
export const WALINE = config.waline;
export const GITALK = config.gitalk;
export const FRIEND = config.friend;
export const COPYRIGHT = config.copyright;
export const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? ""
  : import.meta.env.BASE_URL;
