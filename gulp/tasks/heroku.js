import gulp from 'gulp';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

gulp.task('deploy:heroku', () => {
	return gulp
		.src(['./index.php', './composer.json'])
		.pipe(gulp.dest(`${taskTarget}`));
});
