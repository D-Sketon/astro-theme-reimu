export interface SiteConfig {
  title: string;
  subtitle: string;
  description: string;
  keywords: string | string[];
  author: string;
  language: string;
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
  email?: string;
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
  serverURLs: string;
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
  };
}

export interface PreloaderConfig {
  enable: boolean;
  text: string;
  rotate: boolean;
}

export interface SidebarConfig {
  position: "left" | "right";
  avatar: string;
}

export interface MenuConfig {
  name: string;
  url: string;
}

export interface BannerSrcSetConfig {
  enable: boolean;
  srcset: {
    src: string;
    media: string;
  }[];
}

export interface FireworkConfig {
  enable: boolean;
  disable_on_mobile: boolean;
  options: Record<string, any>;
}

import config from "../config";

const typedConfig = config as {
  site: SiteConfig;
  footer: FooterConfig;
  analytics: AnalyticsConfig;
  social: SocialConfig;
  valine: ValineConfig;
  waline: WalineConfig;
  gitalk: GitalkConfig;
  friend: FriendConfig[];
  copyright: CopyrightConfig;
  preloader: PreloaderConfig;
  sidebar: SidebarConfig;
  menu: MenuConfig[];
  banner: string;
  banner_srcset: BannerSrcSetConfig;
  firework: FireworkConfig;
};

export const SITE = typedConfig.site;
export const FOOTER = typedConfig.footer;
export const ANALYTICS = typedConfig.analytics;
export const SOCIAL = typedConfig.social;
export const VALINE = typedConfig.valine;
export const WALINE = typedConfig.waline;
export const GITALK = typedConfig.gitalk;
export const FRIEND = typedConfig.friend;
export const COPYRIGHT = typedConfig.copyright;
export const PRELOADER = typedConfig.preloader;
export const SIDEBAR = typedConfig.sidebar;
export const MENU = typedConfig.menu;
export const BANNER = typedConfig.banner;
export const BANNER_SRCSET = typedConfig.banner_srcset;
export const FIREWORK = typedConfig.firework;

let _BASE_URL = import.meta.env.BASE_URL;
// normalize BASE_URL, make sure it starts with '/' and does not end with '/'
if (_BASE_URL.endsWith("/")) {
  _BASE_URL = _BASE_URL.slice(0, -1);
}
if (!_BASE_URL.startsWith("/")) {
  _BASE_URL = `/${_BASE_URL}`;
}
export const BASE_URL = _BASE_URL;

export const SITE_URL = import.meta.env.SITE.endsWith("/")
  ? import.meta.env.SITE.slice(0, -1)
  : import.meta.env.SITE;
