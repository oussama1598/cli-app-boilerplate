'use strict';

import { series, src, dest } from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';

const plugins = gulpLoadPlugins();

const paths = {
  dist: 'dist',
  src: {
    scripts: ['src/**/!(*.spec|*.integration).js']
  }
};

export async function cleanDist(cb) {
  await del([`${paths.dist}/!(.git*|Procfile)**`], {
    dot: true
  });

  cb();
};

export function transpileServer() {
  return src(paths.src.scripts)
    .pipe(plugins.sourcemaps.init())
    .pipe(
      plugins.babel({
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      })
    )
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(dest(`${paths.dist}/src`));
};

export function copyIndex() {
  return src('index.js')
    .pipe(
      plugins.removeCode({
        production: true
      })
    )
    .pipe(dest(paths.dist));
};

export function copyServer() {
  return src(['package.json'], {
    cwdbase: true
  }).pipe(dest(paths.dist));
};

exports.build = series(cleanDist, transpileServer, copyServer, copyIndex);
