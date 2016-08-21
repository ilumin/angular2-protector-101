var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var protractor_conf = require('./e2e-tests/protractor.conf');
var browserSync = require('browser-sync');

gulp.task('default', function() {
});

gulp.task('e2e-test', function() {
  gulp.src(protractor_conf.config.specs)
    .pipe(protractor({
      configFile: "e2e-tests/protractor.conf.js",
      args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e });
});

gulp.task('e2e-test', function() {
  var bs = browserSync.create();
  bs.init({
    server: {
      baseDir: "src/client"
    },
    open: false
  });
  gulp.src(protractor_conf.config.specs)
    .pipe(protractor({
      configFile: "e2e-tests/protractor.conf.js",
      args: ['--baseUrl', 'http://127.0.0.1:3000']
    }))
    .on('error', function(e) {
      throw e
    })
    .on('end', function () {
      // Close browser sync server
      bs.exit();
    })
});

gulp.task('serve-dev', function() {
  browserSync({
      server: "src/client",
  });
});
