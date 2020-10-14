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

function getOne(id, table) {
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

function createOne(body, table) {
	return knex.insert(body).into(table).returning("*");
}

function updateOne(id, body, table) {
	return knex.update(body).from(table).where({ userID: id });
}

function deleteOne(id, table) {
	return knex.delete().from(table).where({ userID: id });
}

module.exports = {
	getAll,
	getOne,
	createOne,
	updateOne,
	deleteOne,
};
