import gulp from 'gulp';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

gulp.task('deploy:heroku', () => {
	return gulp.src('./index.php').pipe(gulp.dest(`${taskTarget}`));
});
