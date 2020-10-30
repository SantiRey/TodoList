var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");

var {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser,
	tableName,
	getUserByName,
} = require("../services/userServices");
const passport = require("passport");
const scopesValidationHandler = require("../middleware/scopesValidationHandler");
require("../utils/strategies/jwt");

require("../middleware/scopesValidationHandler");

router.get(
	"/all",
	passport.authenticate("jwt", { session: false }),
	scopesValidationHandler(["user:read"]),
	async function (req, res, next) {
		try {
			const users = await getAllUsers(tableName);
			res.status(200).json({
				data: users,
				messages: "users listed",
			});
		} catch (err) {
			next(err);
		}
	}
);

router.get(
	"/:userID",
	passport.authenticate("jwt", { session: false }),
	scopesValidationHandler(["user:read"]),
	async function (req, res, next) {
		const { userID } = req.params;
		console.log(`Request to get user : ${userID}`);
		try {
			const users = await getUser(userID, tableName);
			res.status(200).json({
				data: users,
				messages: "one user listed",
			});
		} catch (err) {
			next(err);
		}
	}
);

router.get(
	"/name/:userName",
	passport.authenticate("jwt", { session: false }),
	scopesValidationHandler(["user:read"]),
	async function (req, res, next) {
		const { userName } = req.params;
		console.log(`Request to get user : ${userName}`);
		try {
			const users = await getUserByName(userName, tableName);
			res.status(200).json({
				data: users,
				messages: "one user listed",
			});
		} catch (err) {
			next(err);
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	scopesValidationHandler(["user:create"]),
	async function (req, res, next) {
		console.log("Got UserName: ", req.body.name);
		req.body.password = await bcrypt.hash(req.body.password, 10);
		createUser(req.body, tableName)
			.then((resq) =>
				res.status(201).json({ data: resq, messages: "user created" })
			)
			.catch((err) => next(err));
	}
);

router.put(
	"/:userID",
	passport.authenticate("jwt", { session: false }),
	scopesValidationHandler(["user:update"]),
	async function (req, res, next) {
		const id = req.params.userID;
		const data = req.body;
		console.log("user to update with id ", id);
		updateUser(id, data, tableName)
			.then((resq) =>
				res.status(200).json({ data: resq, messages: "user updated" })
			)
			.catch((err) => next(err));
	}
);

router.delete(
	"/:userID",
	passport.authenticate("jwt", { session: false }),
	scopesValidationHandler(["user:delete"]),
	async function (req, res, next) {
		const id = req.params.userID;
		console.log("user to delete with id ", id);
		deleteUser(id, tableName)
			.then((resq) =>
				res.status(200).json({ data: resq, messages: "user deleted" })
			)
			.catch((err) => next(err));
	}
);

module.exports = router;
