English | [简体中文](README-CN.md)

![cover](https://clio-space-1300725494.cos.ap-guangzhou.myqcloud.com/frame/featured_img/hexo_cover.jpg)

Frame is a minimal hexo theme. Inspired by traditional paintings and their frames, Frame is designed to showcase personal blogs, profiles, or portfolios in a concise and elegant way.

[👉 Demo Site](https://frame.zhangyongqi.com/)

## Getting started

### Installation

If this is your first time using hexo, please go to the official [hexo website](https://hexo.io/) to install and initialize your hexo project. Then, clone the theme in your hexo project:


```
# go to your hexo theme folder
cd themes

# clone the project
git clone https://github.com/zoeingwingkei/frame.git
```

### Configuration

Go to the hexo configuration file `config.yml`, and change the following theme settings:

```
theme: frame
```

### Run Server

Now that **Frame** is all set up 👌. You can test the theme through:

```
hexo server
```

## Color Mode

Frame provides 3 color modes: default, classic and dark.

![color mode](https://clio-space-1300725494.cos.ap-guangzhou.myqcloud.com/frame/featured_img/color_mode.jpg)

To change the color mode, go to the `config.yml` file under the `frame` theme folder, and modify the following settings:

```
# color mode: default / classic / dark
color_mode: classic
```

## Gallery View

Frame provides a gallery view, where blog posts are presented with their featured images and tags. Simply add a category "gallery" to your post, then it would be listed in the gallery view.

```
categories:
- [gallery]
```

The featured image of the post can also be added to the [Front-matter](https://hexo.io/docs/front-matter) of the post:

```
featured_image: /path/to/your/image.jpg 
```

## Profile Page

The profile page, or the home page, is the very first page of your site. By default, there is a title, some body text, several links and a profile image on this page. You can customize the content of your profile at the `config.yml` file of the theme:

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

In case you prefer to customize your profile page, go to `frame/layout/pages/profile.ejs` and modify the layout and style of your own page, have fun 🙌

## Tag Page

Frame provides a tag cloud on the `/tag/` page, which contains all possible tags in your blog. In order to set up the tag cloud, you need to create a hexo page named `tag`. 

```
hexo new page tag
```

Inside the `source/tag/index.html` file, type the following:

```
---
title: '''tag'''
layout: tag
---
```

## Configurations

### Header

The header is simply consist of a site brand name and a navigation menu, you can change those content at the `config.yml` file under the theme folder.

```
# header
site_brand_name: Your site name

menu:
  Home: /
  Archive: /archives/
  Gallery: /categories/gallery/
  About: /about/
```

### Footer

You can also customize the content of your footer at the `config.yml` file:

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

### Favicon

Add your own favicon of the website at the `frame/source/` folder, then configure it at the `config.yml` file:

```
# favicon
favicon: /favicon.ico
```

### Math

In case you would like to use math equations in your blog, go to the `config.yml` file and turn on the [MathJax](*https://github.com/hexojs/hexo-math*) tool:

```
# mathjax setting
mathjax_enable: true
```

Note: if you haven't install the hexo math plugin, you need to install it first:

```
npm i hexo-math --save
```

## Lisense

This project is released under [MIT License](https://opensource.org/licenses/MIT).

All the images used in the [demo site](https://frame.zhangyongqi.com) are the works from Claude Monet (1840 - 1926), which is considered to be in the public domain in its country of origin and other countries and areas.

