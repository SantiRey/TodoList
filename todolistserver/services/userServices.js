const {
	getAll,
	getOne,
	createOne,
	updateOne,
	deleteOne,
} = require("../utils/db/dbQueries");

getAllUsers = async function (table) {
	return getAll(table) || [];
};

getUser = async function (id, table) {
	return getOne(id, table) || [];
};

createUser = async function (data, table) {
	return createOne(data, table) || [];
};

updateUser = async function (id, data, table) {
	return updateOne(id, data, table) || [];
};

deleteUser = async function (id, table) {
	return deleteOne(id, table) || [];
};
module.exports = {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser,
};
