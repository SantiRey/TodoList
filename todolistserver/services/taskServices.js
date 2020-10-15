const {
	getAll,
	getOne,
	createOne,
	updateOne,
	deleteOne,
} = require("../utils/db/dbQueries");

const tableName = "tasks";

getAllTasks = async function (table) {
	return getAll(table) || [];
};

getTask = async function (id, table) {
	return getOne(id, table) || [];
};

createTask = async function (data, table) {
	return createOne(data, table) || [];
};

updateTask = async function (id, data, table) {
	return updateOne(id, data, table) || [];
};

deleteTask = async function (id, table) {
	return deleteOne(id, table) || [];
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
	tableName,
};
