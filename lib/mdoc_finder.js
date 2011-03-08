var fs = require('fs')


function _find(path, callback)
{
	fs.readdir(path, function (err, items)
	{
		items.forEach(function (item)
		{
			// exclude items which names start with underscore
			if (item.charAt(0) === '_')
				return

			item = path + '/' + item

			fs.stat(item, function (err, stat)
			{
				// get other files recursively
				if (stat.isDirectory()) {
					_find(item, callback)
					return
				}

				item.substr(-5) === '.mdoc' && callback.call(null, item)
			})
		})
	})
}

module.exports.collect = _find
