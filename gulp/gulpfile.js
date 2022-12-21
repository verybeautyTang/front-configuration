const { src, dest, series, watch } = require('gulp')
const del = require('del')
const plugins = require('gulp-load-plugins');
const  browserSync = require('browser-sync')

const reload = browserSync.reload;

function defalutTask (cb) {
  console.log('hello gulp')
  cb();
}

// 压缩js
function js (cb) {
  src('js/*.js')
  // 下一个处理环节
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'))
    .pipe(reload({stream: true}))
    cb()
}

// 编译css、less等文件，压缩、输出css文件
function css (cb) {
  src('css/*.scss')
  // 下一个处理环节
    .pipe(plugins.sass({
      outputStyle: 'compressed'
    }))
    .pipe(plugins.autoprefixer({
      cascade: false,
      remove: false,
    }))
    .pipe(dest('./dist/css'))
    .pipe(reload({stream: true}))
    cb()
  cb();
}


// 清除dist文件
function clean (cb) {
  del('./dist')
  cb();
}

// 监听文件的变化
function watcher () {
  watch('js/*.js', js)
  watch('css/*.scss', css)
}

// server任务
function serve(cb) {
  browserSync.init({
    serve: {
      baseDir: './',
    }
  });
  cb()
}

exports.style = css
exports.script = js
exports.clean = clean
exports.default = series([
  clean,
  js,
  css,
  serve,
  watcher
]);