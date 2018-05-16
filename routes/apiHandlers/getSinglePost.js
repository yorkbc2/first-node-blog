module.exports = function getSinglePost (req, res) {
	let db = global.mysql;
	let id = req.body.id;
	let singlePost = db.select({
		table: 'Posts',
		values: '*',
		where: [
			['id', '=', id]
		]
	}, (r) => {
		if (typeof r[0] !== 'undefined') {
			res.json(r[0]);
			db.updateById('Posts', r[0].id, 'views', 'increment');
		} else {
			res.json({
				error: true	
			})
		}
	})

}