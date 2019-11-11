import gulp from 'gulp';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

gulp.task('zip', () => {
	return gulp
		.src(`${taskTarget}/**/*`)
		.pipe(plugins.zip(`${taskTarget}.zip`))
		.pipe(gulp.dest('./'));
});
