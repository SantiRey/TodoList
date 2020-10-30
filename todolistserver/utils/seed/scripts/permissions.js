const bycript = require("bcrypt");
const { config } = require("../../../config/config");
const { knex } = require("../../db/dbConnection");

seedPermissions = function () {
	const userReadPermission = {
		permissionLayer: "Admin",
		permissionName: "user:read",
		token: config.secretAdmin,
	};
	const userUpdatedPermission = {
		permissionLayer: "Admin",
		permissionName: "user:updated",
		token: config.secretAdmin,
	};
	const userDeletePermission = {
		permissionLayer: "Admin",
		permissionName: "user:delete",
		token: config.secretAdmin,
	};

	const adminPermissions = [
		userReadPermission,
		userUpdatedPermission,
		userDeletePermission,
	];

	return adminPermissions.map((res) =>
		knex
			.insert(res)
			.into("permissions")
			.returning("*")
			.then((res) => console.log(res))
	);
};

seedPermissions();
