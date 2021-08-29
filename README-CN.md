[English](README.md) | 简体中文

![cover](https://clio-space-1300725494.cos.ap-guangzhou.myqcloud.com/frame/featured_img/hexo_cover.jpg)

Frame 是一个极简风格的 hexo 主题。Frame 的主题设计如同一个简洁优雅的画框，适合用来展示你的个人博客或者作品集。

[👉 示例网站](https://frame.zhangyongqi.com/)

## 开始使用

### 安装

如果这是你第一次使用 hexo，请移步 hexo 的 [官方网站](https://hexo.io/zh-cn/) 学习如何安装和建站。然后，请在你的 hexo 项目主题文件夹下安装 Frame：

```
# go to your hexo theme folder
cd themes

# clone the project
git clone https://github.com/zoeingwingkei/frame.git
```

### 主题配置

在 hexo 项目的 `config.yml` 文件里， 将你的项目主题换成 Frame:

```
theme: frame
```

### 运行主题

现在 Frame 主题就已经设置完成了👌，你可以在本地运行你的 hexo 项目来测试一下：

```
hexo server
```

## 主题色

Frame 提供三种不同的主题色：Default 默认，Classic 经典和 Dark 暗色。

![color mode](https://clio-space-1300725494.cos.ap-guangzhou.myqcloud.com/frame/featured_img/color_mode.jpg)

你可以在 `frame` 主题文件夹下面的 `config.yml` 文件修改主题色的配置：

```
# color mode: default / classic / dark
color_mode: classic
```

## Gallery 模式

在 `gallery` 视图模式下，文章会连同封面图和标签一起展示。只需将你的文章加入到 `gallery` 这个分类里即可。

```
categories:
- [gallery]
```
文章的封面图链接需要写在 `markdown` 文件的 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 里：

```
featured_image: /path/to/your/image.jpg 
```

## 博客主页

默认情况下，你的主页会展示标题，正文，一些链接以及一个封面图。你可以在主题文件夹下的 `config.yml` 文件里修改这些配置： 

```
# profile
profile:
  title: Your profile title.
  body: Your profile body
  image: /path/to/your/image.jpg 

  links:
  	Blogs: /archive/
  	Resume: /path/to/your/resume.pdf
  	Projects: /categories/gallery/
```

如果你想要进一步个性化你的个人主页，请到 `frame/layout/pages/profile.ejs` 里修改你的主页结构和风格，在此祝你设计愉快 🙌

## 标签页

网站的 `/tag/` 页面会列出这个博客里所有的标签。在此之前你需要新建一个名为 `tag` 的 hexo 页面。

```
hexo new page tag
```

然后，在 `source/tag/index.html` 文件下, 输入以下申明:

```
---
title: '''tag'''
layout: tag
---
```

## 配置项

### 页头

主题的页头由网站名和菜单栏组成，你可以在主题文件夹下的 `config.yml` 文件里修改这些配置。

```
# header
site_brand_name: Your site name

menu:
  Home: /
  Archive: /archives/
  Gallery: /categories/gallery/
  About: /about/
```

### 页脚

同样的，你可以在 `config.yml` 文件里修改页脚的配置： 

```
# footer
footer:
  copyright_info:
    enable: true
    author: © Your name

  powered_by: # Powered by Hexo & Frame
    enable: true

  other_info:
    enable: true
    content: Customized content.
```

### 网站图标

你可以在 `frame/source/` 文件夹里添加你的网站图标，然后在 `config.yml` 里添加这个图标的路径：

```
# favicon
favicon: /favicon.ico
```

### 数学公式

如果你需要在你的博客里书写数学公式，那么你需要在 `config.yml` 文件里开启 [MathJax](*https://github.com/hexojs/hexo-math*) 工具：

```
# mathjax setting
mathjax_enable: true
```
注意：如果你还未安装 hexo 的数学公式插件，你需要先将其安装在你的 hexo 项目里：

```
npm i hexo-math --save
```

## 版权

此项目使用 [MIT License](https://opensource.org/licenses/MIT)。

在 [示例网站](https://frame.zhangyongqi.com) 里所展示的所有图片均来自克劳德·莫奈（Claude Monet，1840 - 1926）的作品，目前其作品在其原属国家和其他国家地区都属于公共版权的范畴内。
