const bycript = require("bcrypt");
const userQuery = require("../../db/dbQueryUser");
const { config } = require("../../../config/config");

function buildAdminUser(password) {
	return {
		password,
		name: config.authAdminUsername,
	};
}

async function hasAdminUser(userQuery) {
	const adminUser = await userQuery.getA(userQuery.tableName);
	return adminUser && adminUser.length;
}

async function createAdminUser(userQuery) {
	console.log("PassWORD: " + config.authAdminPassword);
	const hashenPassword = await bycript.hash(config.authAdminPassword, 10);
	var userTest = {
		name: "paula",
		password: hashenPassword,
	};
	const userID = await userQuery.createU(userTest, "users");
	return userID;
}

async function seedAdmin() {
	try {
		if (await hasAdminUser(userQuery)) {
			console.log("::::ADMIN USER EXIST:::");
			return process.exit(1);
		}
		const adminUserId = await createAdminUser(userQuery);
		console.log("Admin created");
		console.log(adminUserId);
	} catch (error) {
		console.log(error);
	}
}

seedAdmin();
