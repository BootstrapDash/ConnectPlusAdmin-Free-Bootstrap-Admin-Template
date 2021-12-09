'use strict'
var gulp = require('gulp');
var concat = require('gulp-concat');
var merge = require('merge-stream');
const del = require('del');


gulp.task('clean:vendors', function () {
    return del([
      './assets/vendors/**/*'
    ]);
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task('buildBaseVendorScripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js', 
        // './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 
        './node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js'
    ])
      .pipe(concat('vendor.bundle.base.js'))
      .pipe(gulp.dest('./assets/vendors/js'));
});

/*Building vendor styles needed for basic template rendering*/
gulp.task('buildBaseVendorStyles', function() {
    return gulp.src(['./node_modules/perfect-scrollbar/css/perfect-scrollbar.css'])
      .pipe(concat('vendor.bundle.base.css'))
      .pipe(gulp.dest('./assets/vendors/css'));
});

/*Scripts for addons*/
gulp.task('buildOptionalVendorScripts', function() {
    var aScript1 = gulp.src(['node_modules/chart.js/dist/Chart.min.js'])
        .pipe(gulp.dest('./assets/vendors/chart.js'));
    var aScript2 = gulp.src(['node_modules/progressbar.js/dist/progressbar.min.js'])
        .pipe(gulp.dest('./assets/vendors/progressbar.js'));
    var aScript3 = gulp.src(['node_modules/moment/moment.js'])
        .pipe(gulp.dest('./assets/vendors/moment'));
    var aScript4 = gulp.src(['node_modules/moment/min/moment.min.js'])
        .pipe(gulp.dest('./assets/vendors/moment'));
    var aScript7 = gulp.src(['node_modules/jquery-circle-progress/dist/circle-progress.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-circle-progress/js'));
    var aScript8 = gulp.src(['node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'])
        .pipe(gulp.dest('./assets/vendors/bootstrap-datepicker'));
    var aScript9 = gulp.src(['node_modules/pwstabs/assets/jquery.pwstabs.min.js'])
        .pipe(gulp.dest('./assets/vendors/pwstabs'));
    var aScript10 = gulp.src(['node_modules/codemirror/lib/codemirror.js'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aScript11 = gulp.src(['node_modules/codemirror/mode/javascript/javascript.js'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aScript12 = gulp.src(['node_modules/codemirror/mode/shell/shell.js'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    return merge(aScript1, aScript2, aScript3, aScript4, aScript7, aScript9, aScript10, aScript11, aScript12);
});


/*Styles for addons*/
gulp.task('buildOptionalVendorStyles', function() {
    var aStyle1 = gulp.src(['./node_modules/@mdi/font/css/materialdesignicons.min.css'])
        .pipe(gulp.dest('./assets/vendors/mdi/css'));
    var aStyle2 = gulp.src(['./node_modules/@mdi/font/fonts/*'])
        .pipe(gulp.dest('./assets/vendors/mdi/fonts'));
    var aStyle3 = gulp.src(['./node_modules/font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest('./assets/vendors/font-awesome/css'));
    var aStyle4 = gulp.src(['./node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('./assets/vendors/font-awesome/fonts'));
    var aStyle5 = gulp.src(['./node_modules/flag-icon-css/css/flag-icon.min.css'])
        .pipe(gulp.dest('./assets/vendors/flag-icon-css/css'));
    var aStyle6 = gulp.src(['./node_modules/flag-icon-css/flags/**/*'])
        .pipe(gulp.dest('./assets/vendors/flag-icon-css/flags'));
    var aStyle7 = gulp.src(['node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'])
        .pipe(gulp.dest('./assets/vendors/bootstrap-datepicker'));
    var aStyle8 = gulp.src(['node_modules/pwstabs/assets/jquery.pwstabs.min.css'])
        .pipe(gulp.dest('./assets/vendors/pwstabs'));
    var aStyle9 = gulp.src(['node_modules/codemirror/lib/codemirror.css'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aStyle10 = gulp.src(['node_modules/codemirror/theme/ambiance.css'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
        
    return merge(aStyle1, aStyle2, aStyle3, aStyle4, aStyle5, aStyle6, aStyle7, aStyle8, aStyle9, aStyle10);
});

//Copy essential map files
gulp.task('copyMapFiles', function() {
    var map1 = gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js.map')
        .pipe(gulp.dest('./assets/vendors/js'));
    var map2 = gulp.src('node_modules/@mdi/font/css/materialdesignicons.min.css.map')
        .pipe(gulp.dest('./assets/vendors/mdi/css'));
    return merge(map1, map2);
});

/*sequence for building vendor scripts and styles*/
gulp.task('bundleVendors', gulp.series('clean:vendors', 'buildBaseVendorStyles','buildBaseVendorScripts', 'buildOptionalVendorStyles', 'buildOptionalVendorScripts', 'copyMapFiles'));