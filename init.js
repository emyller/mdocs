 /*
  * mDocs initializer
  */
var command = process.argv[2]

if (!command) {
	// TODO: display help
	process.exit()
}

require('./commands/' + command).exec(process.cwd())
