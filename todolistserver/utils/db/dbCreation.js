const { knex } = require("./dbConnection");

module.exports.up = function () {
	// Create referenced table before referencing table.
	return knex.schema
		.createTable("users", function (users) {
			users.increments("userID").primary();
			users.string("name");
			users.string("password");
		})
		.createTable("tasks", function (samples) {
			samples.increments("taskID").primary();
			samples.string("taskName");
			samples
				.integer("userID")
				.references("userID")
				.inTable("users")
				.notNull()
				.onDelete("cascade");
		})
		.then(() => console.log("table created"))
		.catch((err) => {
			console.log(err);
			throw err;
		})
		.finally(() => {
			knex.destroy();
		});
};

module.exports.down = function () {
	// Reverse order here to prevent error.
	return knex.schema
		.dropTable("tasks")
		.dropTable("users")
		.then(() => console.log("tables droped"))
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			knex.destroy();
		});
};
//module.exports.up();
//module.exports.down();
