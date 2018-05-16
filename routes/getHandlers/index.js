const fs = require('fs');
const pathToIndexFile = './client/index.html';
function indexHandler (req, res) {
	fs.readFile(pathToIndexFile, (err, data) => {
		if (err) throw err;
		res.header('Content-Type', 'text/html');
		res.send(data);

	})
}

module.exports = indexHandler;