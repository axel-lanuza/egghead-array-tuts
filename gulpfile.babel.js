import budo from 'budo'
import errorify from 'errorify'
import garnish from 'garnish'
import gulp from 'gulp'
import yargs from 'yargs'
import once from 'once'
import openURL from 'opn'
import watchify from 'watchify'
import babelify from 'babelify'
import filesystem from 'fs'
import todo from 'gulp-todo'

const browser = 'google chrome canary'
const argv = yargs
    .usage('Usage: -d [string] -f [num]')
    .argv


// http://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript
var getAllFilesFromFolder = function(dir = 'js', num = 1) {
  var results = []
  filesystem.readdirSync(`./${dir}`).forEach(function(file) {
    results.push(`./${dir}/${file}`)
  })
  // Since the directory has a .DS_store file, we don't neet to reduce 'num' by 1. coolish.
  return results[(num)]
}


const entry = getAllFilesFromFolder(argv.d, argv.f)

//the development task
gulp.task('default', function(cb) {

  var ready = function(){}
  var pretty = garnish()
  pretty.pipe(process.stdout)

  //dev server
  budo( entry, {
    stream: pretty,        //pretty-print requests
    live: true,            //live reload & CSS injection
    verbose: true,         //verbose watchify logging
    //dir: 'app',            //directory to serve
    //transform: babelify,   //browserify transforms
    plugin: errorify       //display errors in browser
  })
  .on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser} ))
  })
  .once('update', function() {
    ready()
  })
})


//////////
// TODO //
//////////

gulp.task('todo', () => {
 gulp.src(['./js', './src/**/*.{jade,styl,js,yaml}', './gulpfile.babel.js'])
   .pipe(todo({
     customTags: ['JS-TODO', 'JADE-TODO', 'CSS-TODO', 'YAML-TODO', 'GULP-TODO']
   }))
   .pipe(gulp.dest('.'))
   // -> Will output a TODO.md with your todos
})

// Just a task for Console loggin stuff
gulp.task('clog', function() {
  console.log( entry );
})
