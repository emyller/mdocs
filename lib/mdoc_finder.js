var
fs = require('fs'),
path = require('path')


function _find(dir, callback)
{
	fs.readdir(dir, function (err, items)
	{
		items.forEach(function (item)
		{
			// exclude items which names start with underscore
			if (item[0] === '_')
				return

			item = path.join(dir, item)

			fs.stat(item, function (err, stat)
			{
				// get other files recursively
				if (stat.isDirectory()) {
					_find(item, callback)
					return
				}

				if (path.extname(item) === '.mdoc')
					callback.call(null, item)
			})
		})
	})
}

module.exports.collect = _find
