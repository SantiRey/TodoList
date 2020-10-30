const { knex } = require("../dbConnection");

up = function () {
	// Create referenced table before referencing table.
	return knex.schema
		.createTable("users", function (users) {
			users.increments("userID").primary();
			users.string("name");
			users.string("password");
			users.string("email");
			users.string("role");
		})
		.createTable("tasks", function (tasks) {
			tasks.increments("taskID").primary();
			tasks.string("taskName");
			tasks
				.integer("userID")
				.references("userID")
				.inTable("users")
				.notNull()
				.onDelete("cascade");
		})
		.createTable("permissions", function (permissions) {
			permissions.increments("permissionID").primary();
			permissions.string("permissionLayer");
			permissions.string("permissionName");
			permissions.string("token");
		})
		.then(() => console.log("tables created"))
		.catch((err) => {
			console.log(err);
			throw err;
		})
		.finally(() => {
			console.log("Connection closed");
			knex.destroy();
		});
};

down = function () {
	// Reverse order here to prevent error.
	return (
		knex.schema
			.dropTable("tasks")
			.dropTable("users")
			//.dropTable("permissions")
			.then(() => console.log("tables droped"))
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				knex.destroy();
			})
	);
};

up();
