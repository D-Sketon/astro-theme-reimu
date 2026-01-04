import type { FireworkConfig } from "./utils/config";

declare global {
  interface Window {
    __FIREWORK_CONFIG__?: FireworkConfig;
    diffY: number;
    loadScript: (src: string, id?: string) => Promise<void>;
    loadCSS: (src: string, id?: string) => Promise<void>;
  }
}

export {};
