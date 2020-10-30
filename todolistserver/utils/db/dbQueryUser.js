const { knex } = require("./dbConnection");

function getA(table) {
	return knex
		.select()
		.table(table)
		.then(function (user) {
			console.log(user);
			return user;
		});
}

function getU(id, table) {
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

function getUByName(name, table) {
	console.log("ask for name: " + name);
	return knex
		.select()
		.from(table)
		.where({ name: name })
		.then(function (user) {
			return user;
		});
}

function createU(body, table) {
	return knex.insert(body).into(table).returning("*");
}

function updateU(id, body, table) {
	return knex.update(body).from(table).where({ userID: id });
}

function deleteU(id, table) {
	return knex.delete().from(table).where({ userID: id });
}
const tableName = "users";

module.exports = {
	getA,
	getU,
	createU,
	updateU,
	deleteU,
	getUByName,
	tableName,
};
