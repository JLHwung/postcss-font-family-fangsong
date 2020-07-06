# postcss-font-family-fangsong [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![CSS Standard][css-img]][css-url]
[![Gitter Chat][git-img]][git-url]

[English](./README.md)

[postcss-font-family-fangsong]让你可以使用在[CSS Fonts Module Level 4]定义的通用字体族`fangsong`。

```css
body {
  font: 16pt/28pt fangsong;
}

/* 转译为 */

body {
  font: 16pt/28pt fangsong, STFangsong, FangSong, FangSong_GB2312;
}
```

## 用法

安装[postcss-font-family-fangsong]开发依赖：

```bash
npm install postcss-font-family-fangsong --save-dev
```

#### PostCSS

安装[PostCSS]开发依赖：

```bash
npm install postcss --save-dev
```

将[postcss-font-family-fangsong]添加为PostCSS插件：

```js
import postcss from "gulp-postcss";
import postcssFontFangsong from "postcss-font-family-fangsong";

postcss([postcssFontFangsong(/* 选项 */)]).process(YOUR_CSS);
```

#### Gulp

安装[Gulp PostCSS]开发依赖：

```bash
npm install gulp-postcss --save-dev
```

在Gulpfile中使用[postcss-font-family-fangsong]：

```js
import postcss from "gulp-postcss";
import postcssFontFangsong from "postcss-font-family-fangsong";

gulp.task("css", () =>
  gulp
    .src("./src/*.css")
    .pipe(postcss([postcssFontFangsong(/* 选项 */)]))
    .pipe(gulp.dest("."))
);
```

#### Grunt

安装[Grunt PostCSS]开发依赖：

```bash
npm install grunt-postcss --save-dev
```

在Gruntfile中使用[postcss-font-family-fangsong]：

```js
import postcssFontFangsong from "postcss-font-family-fangsong";

grunt.loadNpmTasks("grunt-postcss");

grunt.initConfig({
  postcss: {
    options: {
      use: [postcssFontFangsong(/* 选项 */)],
    },
    dist: {
      src: "*.css",
    },
  },
});
```

#### Node

使用[postcss-font-family-fangsong]处理CSS文件：

```js
import postcssFontFangsong from "postcss-font-family-fangsong";

postcssFontFangsong.process(YOUR_CSS);
```

## 选项

### family

`family: string | string[]`选项指定用来替换`fangsong`的一系列字体家族属性。它可以是字体族组成的数组，也可以是逗号分割的一组字体族。

```js
import postcssFontFangsong from "postcss-font-family-fangsong";

postcssFontFangsong({
  family: "fangsong, FangSong, FZFangSong-Z02, FandolFang", // 指定将fangsong替换成fangsong，中易仿宋，方正仿宋与Fandol仿宋
});
```

### preserve

`preserve: boolean` 选项控制通用字体族`fangsong`是否应该出现在转换的结果里，默认值为`true`。

```js
postcssFontFangsong({
  preserve: true, // 在转换结果中保留fangsong
});
```

注意，当`family`选项与`preserve`选项同时指定时，`preserve`选项将不起作用。

[css-img]: https://csstools.github.io/cssdb/badge/fangsong-font-family.svg
[css-url]: https://csstools.github.io/cssdb/#fangsong-font-family
[npm-img]: https://img.shields.io/npm/v/postcss-font-family-fangsong.svg
[npm-url]: https://www.npmjs.com/package/postcss-font-family-fangsong
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[css fonts module level 4]: https://drafts.csswg.org/css-fonts-4/#fangsong-def
[gulp postcss]: https://github.com/postcss/gulp-postcss
[grunt postcss]: https://github.com/nDmitry/grunt-postcss
[postcss-font-family-fangsong]: https://github.com/JLHwung/postcss-font-family-fangsong
[postcss]: https://github.com/postcss/postcss
