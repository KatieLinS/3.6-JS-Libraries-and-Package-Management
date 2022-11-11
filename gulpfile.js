var gulp = require('gulp');
var babel = require("gulp-babel");
var nodemon = require('gulp-nodemon');

gulp.task('build', function() {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('dev', gulp.series('build', function() {
    return nodemon({
        script: 'dist/index.js',
        watch: 'src',
        ext: 'js',
        ignore: ['dist/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
}));