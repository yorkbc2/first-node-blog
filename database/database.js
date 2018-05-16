var mysql = require('mysql');
var config = require('./database.config.js');

class MySQLConnection {
	constructor() {
		this.config = config;
		this.connection = mysql.createConnection(this.config);
	}

	connect() {
		this.connection.connect((error) => {
			if (error) {
				console.error(`Connection MySQL Error: ${error.stack}`);		
				return;
			}
			console.log('Connection is good!');
		});
	}
	/**
	 * @param  {String} customQuery 
	 * @param  {Function} callback
	 */
	query(customQuery, callback) {
		this.connection.query(customQuery, (e, results, fields) => {
			if (e) throw e;
			if (typeof callback === 'function')
				callback(results, fields);

		});
	}
	/**
	 * @param  {Object}   selectObject [description]
	 * @param  {Function} callback     [description]
	 */
	select(selectObject, callback) {
		let table = selectObject.table || null;
		let values = selectObject.values || null;
		let where = selectObject.where || null;
		if (table && values) {
			if (typeof values === 'object') values = values.split(',');
			let query = `SELECT ${values} FROM ${table}`;
			if (where) {
				let whereQuery = 'WHERE';
				for (let i = 0 ; i < where.length; i++) {
					if (where[i].length === 3) {
						let item = where[i];
						whereQuery += ` ${item[0]} ${item[1]} ${item[2]} `;
					}
					if (typeof where[i + 1] !== 'undefined') {
						whereQuery += 'AND';
					}
				}
				query += ' ' + whereQuery + ';';
			}
			this.query(query, callback);

		}
	}
	/**
	 * @param  {String}   table    
	 * @param  {Object}   values   
	 * @param  {Function} callback 
	 */
	insert(table, values, callback) {
		let fields = [];
		var insertValues = [];
		for (let key in values) {
			fields.push(key);
			insertValues.push("\'" + values[key] + "\'");
		}
		insertValues = insertValues.join(',');
		fields = fields.join(',')
		let query = `INSERT INTO ${table} (${fields}) VALUES (${insertValues});`;
		this.query(query, callback);
	}
	/**
	 * Updating row by id
	 * @param  {string}   table    Table name
	 * @param  {number}   id       Id of row
	 * @param  {column}   column   Which column we update
	 * @param  {number|string}   value    New Value
	 * @param  {Function} callback Callback Function
	 */
	updateById(table, id, column, value, callback) {
		switch (value) {
			case "increment": {
				value = `${column} + 1`;
				break;
			}
			default: {
				value = `'${value}'`
				break;
			}
		}
		let query = `UPDATE ${table} SET ${column}=${value} WHERE id=${id}`;
		this.query(query, callback)
	}
	/**
	 * @param  {string} tableName Table Name
	 * @param  {object} columns   Array of columns
	 * @param  {Function} callback Callback Function 
	 */
	createTable(tableName, columns, callback) {
		let query = `CREATE TABLE IF NOT EXISTS ${tableName} (
			${columns.join(',\n')}
		) CHARACTER SET utf8 COLLATE utf8_general_ci;`;
		this.query(query, callback);
	}

	close() {
		this.connection.end();
	}
}

module.exports = MySQLConnection;