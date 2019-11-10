import gulp from 'gulp';
import path from 'path';
import merge from 'gulp-merge-json';

import { plugins, args, config, taskTarget, browserSync } from '../utils';

import RemoveExtension from '../helpers/remove-extension';
import CapitalizeWord from '../helpers/capitalize';

const dirs = config.directories;
const dest = path.join(taskTarget);

gulp.task('pug:data', () => {
	return gulp
		.src([
			`${dirs.source}${dirs.app}${dirs.component}**/*.json`,
			`./seo.json`
		])
		.pipe(
			merge({
				fileName: 'data.json',
				edit: (json, file) => {
					// Extract the filename and strip the extension
					const filename = path.basename(file.path),
						primaryKey = RemoveExtension(CapitalizeWord(filename));

					// Set the filename as the primary key for our JSON data
					const data = {};
					data[primaryKey] = json;

					return data;
				}
			})
		)
		.pipe(gulp.dest(`${dirs.source}${dirs.app}data`));
});
