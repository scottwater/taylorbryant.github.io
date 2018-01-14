const gulp = require("gulp");
const gutil = require("gulp-util");
const child = require("child_process");
const browserSync = require("browser-sync").create();

const siteRoot = "_site";
const mainCSS = "src/style.css"; /* Main stylesheet (pre-build) */
const tailwindConfig = "tailwind.js"; /* Tailwind config */

/**
 * Fix Windows compatibility issue
 */
const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

/**
 * Build Jekyll Site
 */
gulp.task("jekyll-build", ["css"], function() {
  browserSync.notify("Running: $ jekyll build");
  return child.spawn(jekyll, ["build"], { stdio: "inherit" });
});

/**
 * Compile styles
 */
gulp.task("css", function() {
  const atimport = require("postcss-import");
  const postcss = require("gulp-postcss");
  const tailwindcss = require("tailwindcss");
  const purgecss = require("gulp-purgecss");
  const autoprefixer = require("gulp-autoprefixer");
  const cleancss = require("gulp-clean-css");

  return gulp
    .src(mainCSS)
    .pipe(postcss([atimport(), tailwindcss(tailwindConfig)]))
    .pipe(
      purgecss({
        content: ["_site/**/*.html"],
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ["html", "js"]
          }
        ]
      })
    )
    .pipe(autoprefixer({ browsers: ["last 2 versions"], cascade: false }))
    .pipe(cleancss())
    .pipe(gulp.dest("_includes/"));
});

/**
 * Serve site with BrowserSync
 */
gulp.task("serve", ["jekyll-build"], () => {
  browserSync.init({
    files: [siteRoot + "/**"],
    port: 4000,
    open: "local",
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(
    [
      mainCSS,
      tailwindConfig,
      "**/*.html",
      "**/*.md",
      "**/*.yml",
      "!_site/**/*"
    ],
    { interval: 1000 },
    ["jekyll-build"]
  );
});

gulp.task("default", ["serve"]);
