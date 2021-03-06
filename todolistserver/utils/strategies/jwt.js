const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");
const dbQueryUser = require("../db/dbQueryUser");
const { config } = require("../../config/config");
const bcrypt = require("bcrypt");

passport.use(
	new Strategy(
		{
			secretOrKey: config.authJwtSecret,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async function (tokenPayload, cb) {
			try {
				const [user] = await dbQueryUser.getUByName(tokenPayload.sub, "users");

				if (!user) {
					return cb(boom.unauthorized(), false);
				}
				user.passport = undefined;
				const objToExport = { ...user, scopes: tokenPayload.scopes };
				return cb(null, objToExport);
			} catch (err) {
				console.log(err);
			}
		}
	)
);
