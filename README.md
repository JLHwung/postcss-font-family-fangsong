# postcss-font-family-fangsong [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![CSS Standard][css-img]][css-url]
[![Gitter Chat][git-img]][git-url]

[postcss-font-family-fangsong] lets you use `fangsong` in CSS, following the
[CSS Fonts Module Level 4] specification.

```css
body {
  font: 16pt/28pt fangsong;
}

/* becomes */

body {
  font: 16pt/28pt fangsong, STFangsong, FangSong, FangSong_GB2312;
}
```

## Usage

Add [postcss-font-family-fangsong] to your build tool:

```bash
npm install postcss-font-family-fangsong --save-dev
```

#### Node

Use [postcss-font-family-fangsong] to process your CSS:

```js
import postcssFontFangsong from "postcss-font-family-fangsong";

postcssFontFangsong.process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [postcss-font-family-fangsong] as a plugin:

```js
import postcss from "gulp-postcss";
import postcssFontFangsong from "postcss-font-family-fangsong";

postcss([postcssFontFangsong(/* options */)]).process(YOUR_CSS);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [postcss-font-family-fangsong] in your Gulpfile:

```js
import postcss from "gulp-postcss";
import postcssFontFangsong from "postcss-font-family-fangsong";

gulp.task("css", () =>
  gulp
    .src("./src/*.css")
    .pipe(postcss([postcssFontFangsong(/* options */)]))
    .pipe(gulp.dest("."))
);
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [postcss-font-family-fangsong] in your Gruntfile:

```js
import postcssFontFangsong from "postcss-font-family-fangsong";

grunt.loadNpmTasks("grunt-postcss");

grunt.initConfig({
  postcss: {
    options: {
      use: [postcssFontFangsong(/* options */)],
    },
    dist: {
      src: "*.css",
    },
  },
});
```

## Options

### family

The `family` option defines the fallback families used to polyfill `fangsong`.
It accepts an array or a comma-separated string.

```js
import postcssFontFangsong from "postcss-font-family-fangsong";

postcssFontFangsong({
  family: "fangsong, FangSong, FZFangSong-Z02, FandolFang",
});
```

### preserve

The `preserve: boolean` option controls whether `fangsong` should be preserved in the transformed CSS output.
It accepts only boolean and the default is `true`

```js
postcssFontFangsong({
  preserve: true, // preserve `fangsong` in the transpiled output
});
```

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
