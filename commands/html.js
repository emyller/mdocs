 /*
  * mDocs
  * mdoc to html module
  */

var
fs = require('fs'),

mdoc_finder = require('../lib/mdoc_finder')


module.exports.exec = function (path)
{
	mdoc_finder.collect(path, function (file)
	{
		fs.readFile(file, function (err, data)
		{
			console.log(data.toString())
		})
	})
}
