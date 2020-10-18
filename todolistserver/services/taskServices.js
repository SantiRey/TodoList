const {
	getA,
	getT,
	createT,
	updateT,
	deleteT,
	tableName,
} = require("../utils/db/dbQueryTask");

getAllTasks = async function (tableName) {
	return getA(tableName) || [];
};

getTask = async function (id, table) {
	return getT(id, table) || [];
};

createTask = async function (data, table) {
	return createT(data, table) || [];
};

updateTask = async function (id, data, table) {
	return updateT(id, data, table) || [];
};

deleteTask = async function (id, table) {
	return deleteT(id, table) || [];
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
	tableName,
};
