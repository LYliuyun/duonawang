
//引入
var gulp = require('gulp');
var sass = require('gulp-sass');

//建立任务
gulp.task('compile',function(){

	//查找文件
	gulp.src('./src/sass/*.scss').pipe(sass({outputStyle:'compact'})).pipe(gulp.dest('./src/css/'))

});

//浏览器同步
var browserSync = require('browser-sync');
gulp.task('myserver',function(){
	browserSync({
		proxy:'http://localhost:8888',

		port:8889,

		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php','./src/js/*.js']
	});

	// 监听sass文件修改
	gulp.watch('./src/sass/*.scss',['compile']);
})