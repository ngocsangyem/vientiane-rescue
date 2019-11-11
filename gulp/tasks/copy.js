import gulp from 'gulp';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

const dirs = config.directories;

gulp.task('copy:video', () => {
	return gulp
		.src([`${dirs.source}${dirs.assets}${dirs.video}**/*`])
		.pipe(gulp.dest(`${taskTarget}/${dirs.video}`));
});
gulp.task('copy:audio', () => {
	return gulp
		.src([`${dirs.source}${dirs.assets}${dirs.audio}**/*`])
		.pipe(gulp.dest(`${taskTarget}/${dirs.audio}`));
});
