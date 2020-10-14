const { knex } = require("./dbConnection");

function getAll(table) {
	return knex
		.select()
		.table(table)
		.then(function (user) {
			console.log(user);
			return user;
		});
}

function getOneUser(id, table) {
	console.log(id);
	return knex
		.select()
		.from(table)
		.where({ userID: id })
		.then(function (user) {
			console.log(user);
			return user;
		});
}

function createNewUser(body, table) {
	return knex.insert(body).into(table).returning("*");
}

function updateUser(id, body, table) {
	return knex.update(body).from(table).where({ userID: id });
}

function deleteUser(id, table) {
	return knex.delete().from(table).where({ userID: id });
}

module.exports = {
	getAll,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
};
