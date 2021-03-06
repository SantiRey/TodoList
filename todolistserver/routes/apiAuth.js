const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const api = express.Router();

const { config } = require("../config/config");
const { findByScopes } = require("../utils/db/dbQueryPermissions");

require("../utils/strategies/basic");

api.post("/token", async function (req, res, next) {
	passport.authenticate("basic", function (error, user) {
		try {
			if (error || !user) {
				next(boom.unauthorized());
			}
			req.login(user, { session: false }, async function (error) {
				if (error) {
					next(error);
				}
				var scopes = await findByScopes(user.role);
				scopes = scopes.map((res) => res.permissionName);
				console.log(scopes);
				const payload = { sub: user.name, scopes: scopes };
				const token = jwt.sign(payload, config.authJwtSecret, {
					expiresIn: "15m",
				});
				return res.status(200).json({ access_token: token });
			});
		} catch (error) {
			console.log(error);
		}
	})(req, res, next);
});

module.exports = api;
