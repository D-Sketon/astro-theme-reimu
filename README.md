<img src="https://fastly.jsdelivr.net/gh/D-Sketon/astro-theme-reimu/screenshot.png"/>
<div align = center>
  <h1>astro-theme-reimu</h1>
  <img alt="GitHub License" src="https://img.shields.io/github/license/D-Sketon/astro-theme-reimu">
  <img alt="FOSSA Status" src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FD-Sketon%2Fastro-theme-reimu.svg?type=shield"/>
  <p align="center">
  ❤ Hakurei Reimu ❤
  </p>

  [演示网站](https://d-sketon.github.io/astro-theme-reimu)

  简体中文 │ [English](https://github.com/D-Sketon/astro-theme-reimu/blob/main/README.en.md)
</div>

基于 [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu) 迁移的 [Astro](https://astro.build) 博客主题

**欢迎提交 ISSUE 和 PR！**

## Lighthouse

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-d-sketon-github-io-astro-theme-reimu/l2ptsmftie?form_factor=desktop">
    <img width="710" alt="astro-theme-reimu Lighthouse Score" src="https://fastly.jsdelivr.net/gh/D-Sketon/astro-theme-reimu/psi.svg">
  <a>
</p>

## 项目结构
```txt
/
├── public/
│   ├── images/
│   │   └── banner.webp
│   │   └── banner-800w.webp
│   │   └── banner-600w.webp
│   │   └── favicon.ico
│   │   └── taichi.webp
│   └── robots.txt
├── src/
│   ├── components/
│   ├── content/
│   │   │  blog/
│   │   │    └── some-blog-posts.md
│   │   └── config.ts
│   ├── hooks/
│   ├── languages/
│   ├── layouts/
│   └── pages/
│   │   └── about.mdx
│   └── styles/
│   └── utils/
│   └── config.yml
│   └── covers.yml
│   └── env.d.ts
└── package.json
```

任何静态资产（如图像）都可以放置在 `public/` 目录中。
所有博客文章都存储在目录 `src/content/blog` 中，关于页面存储在目录 `src/pages` 中。

## 使用
```bash
git clone https://github.com/D-Sketon/astro-theme-reimu.git
cd ./astro-theme-reimu

pnpm i
pnpm npx playwright install

pnpm run dev
```

## 特性
- ✅SEO 友好
- ✅夜间模式
- ✅模糊搜索
- ✅标签归档
- ✅Sitemap && RSS
- ✅评论系统 (Valine / Waline / Gitalk)
- ✅支持 LaTeX
- ✅支持 Mermaid
- ✅不蒜子 / 阅读统计 (Valine / Waline)
- ✅友链卡片
- ✅国际化
- ✅百度统计/谷歌统计/Clarity

## 许可

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FD-Sketon%2Fastro-theme-reimu.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FD-Sketon%2Fastro-theme-reimu?ref=badge_large)