import type { FireworkConfig } from "./utils/config";

declare global {
  interface Window {
    __FIREWORK_CONFIG__?: FireworkConfig;
    diffY: number;
    loadScript: (
      src: string,
      options: string | { id: string; [key: string]: any },
      target?: HTMLElement
    ) => Promise<void>;
    loadCSS: (
      src: string,
      options: string | { id: string; [key: string]: any }
    ) => Promise<void>;
  }
}

export {};
