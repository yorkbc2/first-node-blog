function getPosts (req, res) {
	let db = global.mysql;

	let posts = db.select({
		table: 'Posts',
		values: '*'
	}, (r, f) => {
		res.json(r);
	});
 
}

module.exports = getPosts;