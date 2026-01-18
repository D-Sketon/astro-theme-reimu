## 0.4.1

**2026-01-18**

### 修复

- 修复 mermaid 图表不居中的问题
- 修复侧边栏按钮不能正确高亮的问题
- 修复顶部导航栏按钮热区过小的问题

### 特性

- 搜索弹窗支持通过 `Escape` 键关闭
- frontmatter 新增 `sponsor`、`copyright` 和 `share` 配置项，可单独控制文章是否显示赞助信息、版权声明和分享按钮

---

### Fixes

- Fixed the issue where Mermaid diagrams were not centered
- Fixed the issue where sidebar buttons were not highlighted correctly
- Fixed the issue where the top navigation bar button hotspot area was too small

### Features

- Search popup now supports closing via `Escape` key
- Added `sponsor`, `copyright`, and `share` configuration options in frontmatter to individually control whether articles display sponsorship information, copyright notice, and share buttons

## 0.4.0

**2026-01-17**

### 特性

- 新增鼠标特效支持 (`mouse-firework`)，可通过 `firework` 配置项启用，支持移动端禁用选项
- 新增侧边栏小部件支持 (`widgets`)，支持分类、标签、标签云、归档、最近文章等小部件
- 新增首页分类卡片支持 (`home_categories`)，可展示指定分类及其封面图
- 新增 ICP 备案信息支持，包括工信部备案和萌国 ICP 备案
- 新增三角徽标支持 (`triangle_badge`)，可在页面角落显示 GitHub 等图标
- 新增 Giscus、Utterances、Twikoo、Disqus 评论系统支持
- 新增文章过期提醒功能 (`outdate`)，可自定义过期天数
- 新增文章分享功能 (`share`)，支持微博、QQ、微信、Twitter、Facebook 等平台
- 新增赞助功能 (`sponsor`)，支持展示赞助二维码
- 新增版权声明国际化支持，可自定义显示内容（作者、链接、标题、日期、许可协议等）
- 新增丰富的内置 MDX 组件：
  - `AlertBlockquote` - 警告提示框（支持 info、warning、danger、tip、important 类型）
  - `Details` - 可折叠详情组件
  - `TagRoulette` - 标签轮盘组件
  - `Grid` / `GridCell` - 网格布局组件
  - `Tabs` / `TabItem` - 标签页组件
  - `Gallery` - 照片墙组件
  - `Link` - 内部/外部链接卡片组件
  - `HeatMapCard` - 热力图卡片组件（基于访问量数据）
- 支持在 MDX 文件中展示 Mermaid 流程图，主题自动跟随网站暗色/亮色模式
- 代码块基于 Expressive Code 实现，新增以下功能：
  - 支持行号显示 (via `@expressive-code/plugin-line-numbers`)
  - 支持自动主题切换，代码高亮主题跟随网站暗色/亮色模式
- 头图随机算法改为 Fisher-Yates 洗牌算法，提高随机性和性能
- 新增自定义字体支持，使用 `vite-plugin-font` 自动扫描和优化字体加载

### 重构

- 配置文件从 YAML 格式迁移到 TypeScript 格式，提供更好的类型安全和智能提示
- 图片灯箱从 baguettebox 迁移到 PhotoSwipe
- 移除 Lozad 懒加载库，改用原生 `loading="lazy"`
- 更换默认头图
- 更换默认字体为霞鹜文楷 (LXGWWenKai SC)，提升中文显示效果

---

### Features

- Added mouse firework effects support (`mouse-firework`) configurable via `firework` option with mobile disable capability
- Added sidebar widgets support (`widgets`) including category, tag, tag cloud, archive, and recent posts widgets
- Added home category cards support (`home_categories`) to display specified categories with cover images
- Added ICP filing information support including MIIT filing and Moe ICP filing
- Added triangle badge support (`triangle_badge`) to display GitHub or other icons in page corners
- Added support for Giscus, Utterances, Twikoo, and Disqus comment systems
- Added post outdated warning feature (`outdate`) with customizable expiration days
- Added post sharing feature (`share`) supporting Weibo, QQ, WeChat, Twitter, Facebook, and more platforms
- Added sponsorship feature (`sponsor`) with QR code display support
- Added internationalized copyright notice with customizable content (author, link, title, date, license, etc.)
- Added rich built-in MDX components:
  - `AlertBlockquote` - Alert boxes (supports info, warning, danger, tip, important types)
  - `Details` - Collapsible details component
  - `TagRoulette` - Tag roulette component
  - `Grid` / `GridCell` - Grid layout components
  - `Tabs` / `TabItem` - Tab components
  - `Gallery` - Photo gallery component
  - `Link` - Internal/external link card component
  - `HeatMapCard` - Heatmap card component (based on visit data)
  - `FriendCard` - Friend link card component
- Added support for Mermaid diagrams in MDX files with automatic theme switching for dark/light mode
- Reimplemented code blocks with Expressive Code featuring:
  - Line numbers display (via `@expressive-code/plugin-line-numbers`)
  - Automatic theme switching with syntax highlighting following site dark/light mode
- Improved banner randomization using Fisher-Yates shuffle algorithm for better randomness and performance
- Added custom font support using `vite-plugin-font` for automatic font scanning and optimization

### Refactor

- Migrated configuration files from YAML to TypeScript for better type safety and IntelliSense
- Migrated image lightbox from baguettebox to PhotoSwipe
- Removed Lozad lazy loading library in favor of native `loading="lazy"`
- Updated default banner image
- Changed default font to LXGWWenKai SC for improved Chinese text rendering

## 0.3.0

**2025-12-14**

### 修复

- 修复之前 valine 和 gitalk 评论系统加载错误的问题

### 特性

- 同步 hexo-theme-reimu 样式
- 支持 sidebar 和 toc，可通过 `sidebar` 配置
- 支持 category 分类
- 支持 preloader 加载动画, 可通过 `preload` 配置
- 新增 `banner` 和 `banner_srcset` 配置项，支持文章头图自定义
- 新增 `menu` 配置项，支持自定义导航栏菜单
- waline 评论系统支持自定义 `serverURLs`

---

### Fixes

- Fixed previous issues where the Valine and Gitalk comment systems failed to load correctly .

### Features

- Synced styles from `hexo-theme-reimu`
- Added support for `sidebar` and table of contents (`toc`), configurable via the `sidebar` option
- Added support for post categorization (`category`)
- Added support for `preloader` animation, configurable via the `preload` option
- Introduced new configuration options `banner` and `banner_srcset` for customizing post header images
- Introduced a new `menu` configuration option for customizing navigation bar menus
- Added support for custom `serverURLs` in the Waline comment system

## 0.2.0

**2024-12-07**

### 修复

- 修复部分错误的样式
- 标准化 token 名称和值

### 特性

- 优化蒙层遮罩效果

### 重构

- 将 tabler 替换为 fontawesome 图标库

---

### Fixes

- Fixed some incorrect styles
- Standardized token names and values

### Features

- Optimized the overlay mask effect

### Refactor

- Replaced the `tabler` icon library with `fontawesome`

## 0.1.0

**2024-10-21**

首次发布

---

First release
