const { knex } = require("./dbConnection");

findByScopes = function (scopeLayer) {
	return knex
		.select()
		.from("permissions")
		.where({ permissionLayer: scopeLayer })
		.then(function (permission) {
			return permission;
		});
};

module.exports = {
	findByScopes,
};
