gulp-ember-template
===

A [gulp](https://github.com/gulpjs/gulp) plugin that precompiling templates for [Ember.js](https://github.com/emberjs/ember.js).

- [Installation](#install)
- [Usage](#usage)
- [Options](#options)
- [Debugging](#debugging)
- [License](#license)

Install
---

```
npm install --save-dev gulp-ember-template
```

Usage
---

```javascript
var gulp = require('gulp');
var concat = require('concat');
var emberTemplates = require('gulp-ember-templates');

gulp.task('compile', function() {
  gulp.src('app/tempaltes/**/*.hbs')
    .pipe(emberTemplates({
        base:'app/templates'
    })
    .pipe(concat('templates.js')
    .pipe(gulp.dest('build'))
});
```

### Option

The option can be set through `emberTemplates(options)`.

`base`: the part of the template file path which will not be included in the template name

> NOTE: Calling this function without providing a `base` or the `base` isn't part of the template file path , it will do nothing.

Debugging
---

License
---

The MIT License (MIT)

Copyright (c) 2014 Surpmillet

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
