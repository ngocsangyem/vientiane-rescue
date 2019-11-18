import gulp from 'gulp';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

gulp.task('deploy:heroku', () => {
	return gulp.src('deploy/**/*').pipe(gulp.dest(`${taskTarget}`));
});
