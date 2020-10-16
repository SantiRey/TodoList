const { knex } = require("./dbConnection");

function getA(table) {
	return knex
		.select()
		.table(table)
		.then(function (task) {
			console.log(task);
			return task;
		});
}

function getT(id, table) {
	console.log(id);
	return knex
		.select()
		.from(table)
		.where({ taskID: id })
		.then(function (task) {
			console.log(task);
			return task;
		});
}

function createT(body, table) {
	return knex.insert(body).into(table).returning("*");
}

function updateT(id, body, table) {
	return knex.update(body).from(table).where({ taskID: id });
}

function deleteT(id, table) {
	return knex.delete().from(table).where({ taskID: id });
}

module.exports = {
	getA,
	getT,
	createT,
	updateT,
	deleteT,
};
