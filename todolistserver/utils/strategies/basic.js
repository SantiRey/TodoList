const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const boom = require("@hapi/boom");
const dbQueryUser = require("../db/dbQueryUser");
const bcrypt = require("bcrypt");

passport.use(
	new BasicStrategy(async function (username, password, cb) {
		try {
			const [user] = await dbQueryUser.getUByName(
				username,
				dbQueryUser.tableName
			);

			if (!user) {
				return cb(boom.unauthorized(), false);
			}

			if (!(await bcrypt.compare(password, user.password))) {
				return cb(boom.unauthorized(), false);
			}

			return cb(null, user);
		} catch (err) {
			return cb(err);
		}
	})
);
