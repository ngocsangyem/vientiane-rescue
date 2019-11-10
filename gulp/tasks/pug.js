import fs from 'fs';
import gulp from 'gulp';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

const dirs = config.directories;
const entries = config.entries;
const dest = `${taskTarget}`;

gulp.task('pug', () => {
	return gulp
		.src([
			`${dirs.source}${dirs.app}${dirs.pages}${dirs.views}**/*.pug`,
			`!${dirs.source}${dirs.app}${dirs.views}{**/_*,**/_*/**}`
		])
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(
					'Error: <%= error.message %>'
				)
			})
		)
		.pipe(
			plugins.data(function(file) {
				return JSON.parse(
					fs.readFileSync(
						`./${dirs.source}${dirs.app}${dirs.data}${entries.dataJson}`
					)
				);
			})
		)
		.pipe(
			plugins.pug({
				pretty: '\t'
			})
		)
		.pipe(
			plugins.rename(function(path) {
				path.basename = path.basename.replace(/\.[^.]*$/, '');
				path.dirname = '';
			})
		)
		.on('error', function(err) {
			plugins.util.log(err);
		})
		.on('error', plugins.notify.onError(config.defaultNotification))
		.pipe(gulp.dest(dest))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});
