fs = require('fs'),
path = require('path');

module.exports.setroute = function(app, relativedir) {
	
	var dir = path.dirname(module.parent.filename) + '/' +relativedir;
	fs.readdir(dir, function(err, files){

		if(!err)
			files.forEach(function(item){
				mod = require(dir + '/' + item);
				
				for (var key in mod) 
				{
					mod[key](app);
				}
			
			}
			);
		else
			throw err;

	});
};

// module.exports.ensureAuthenticated = function(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.send(401);
// };