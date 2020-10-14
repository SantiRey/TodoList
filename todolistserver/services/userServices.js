const {
	getAll,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
} = require("../utils/db/dbQueries");

getAllUsers = async function (table) {
	return getAll(table) || [];
};

getUser = async function (id, table) {
	return getOneUser(id, table) || [];
};

createUser = async function (data, table) {
	return createNewUser(data, table) || [];
};

updateOneUser = async function (id, data, table) {
	return updateUser(id, data, table) || [];
};

deleteOneUser = async function (id, table) {
	return deleteUser(id, table) || [];
};
module.exports = {
	getAllUsers,
	createUser,
	getUser,
	updateOneUser,
	deleteOneUser,
};
