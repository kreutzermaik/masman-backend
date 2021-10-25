const gulp = require('gulp');
const run = require('gulp-run');

function runWebpack() {
    console.log("Start building server with webpack.");
    return run('npx webpack').exec();
}

function copyPackageJson() {
    console.log("Copying package.json file to build directory.");
    gulp.src('build/', {read: false});
    return gulp.src('package.json').pipe(gulp.dest('build/'));
}

function installingDependencies() {
    process.env.NODE_ENV = "production";
    process.chdir('build/');
    console.log("Running npm install to fetch bundle dependencies.");
    return run('npm install').exec();
}

const build = gulp.series(runWebpack, copyPackageJson, installingDependencies);

exports.build = build;
exports.default = gulp.series(build);
