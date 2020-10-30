const { config } = require("../../config/config");

var knex = require("knex")({
	client: "pg",
	version: "12.3",
	connection: {
		host: config.db_host,
		user: config.db_user,
		password: config.db_password,
		database: config.db_name,
	},
});

console.log("Connedted to db: " + config.db_name);

module.exports = {
	knex,
};
