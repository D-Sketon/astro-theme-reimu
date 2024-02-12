import fs from "fs";
import yaml from "js-yaml";

export interface SiteConfig {
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

const config = yaml.load(fs.readFileSync("src/config.yml", "utf8")) as {
  site: SiteConfig;
  footer: FooterConfig;
  analytics: AnalyticsConfig;
  valine: ValineConfig;
  waline: WalineConfig;
  gitalk: GitalkConfig;
};

export const SITE = config.site;
export const FOOTER = config.footer;
export const ANALYTICS = config.analytics;
export const VALINE = config.valine;
export const WALINE = config.waline;
export const GITALK = config.gitalk;
