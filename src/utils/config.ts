import fs from "fs";
import yaml from "js-yaml";

export interface SiteConfig {
  title: string;
  subtitle: string;
  description: string;
  keywords: string;
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

const config = yaml.load(fs.readFileSync("src/config.yml", "utf8")) as {
  site: SiteConfig;
  footer: FooterConfig;
  analytics: AnalyticsConfig;
};

export const SITE = config.site;
export const FOOTER = config.footer;
export const ANALYTICS = config.analytics;
