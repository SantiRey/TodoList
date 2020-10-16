const {
	getA,
	getU,
	createU,
	updateU,
	deleteU,
} = require("../utils/db/dbQueryUser");

const tableName = "users";

getAllUsers = async function (table) {
	return getA(table) || [];
};

getUser = async function (id, table) {
	return getU(id, table) || [];
};

createUser = async function (data, table) {
	return createU(data, table) || [];
};

updateUser = async function (id, data, table) {
	return updateU(id, data, table) || [];
};

deleteUser = async function (id, table) {
	return deleteU(id, table) || [];
};
module.exports = {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser,
	tableName,
};
