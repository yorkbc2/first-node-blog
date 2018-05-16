module.exports = function getWebsiteInfo (req, res) {
	let db = global.mysql;
	const pages = [];
	let query = `
		SELECT pages.* FROM Pages AS pages
	`;
	db.query(query, r => {
		res.json(r);
	})
}