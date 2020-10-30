const boom = require("@hapi/boom");
const { dbQueryPermissions } = require("../utils/db/dbQueryPermissions");

function scopesValidationHAndler(allowedScopes) {
	return function (req, res, next) {
		console.log(req);

		if (!req.user || !req.user.scopes) {
			next(boom.unauthorized());
		}

		const hasPermission = !allowedScopes
			.map((res) => req.user.scopes.includes(res))
			.includes(false);

		if (hasPermission) {
			next();
		} else {
			next("Permission failed");
		}
	};
}

module.exports = scopesValidationHAndler;
