/*eslint no-console: ["error", { allow: ["warn", "error", "info", "log"] }] */
/* eslint no-unused-vars: 0 */
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	let result;
	const statement = 'SELECT COUNT(course_id) AS count FROM course WHERE name = "test" or name = "test2"';
	const SqlConnect = require('../controllers/SqlConnect');
	const connection = SqlConnect.makeConnection();

	try {
		await connection.connect();
		result = await connection.query(statement);
		SqlConnect.closeConnection(connection);
	} catch (err) {
		if (!err.fatal) SqlConnect.closeConnection(connection);
		console.error(err.sqlMessage);
	}
	console.log(result[0].count)
	return res.status(200).json(result);
});

module.exports = router;
