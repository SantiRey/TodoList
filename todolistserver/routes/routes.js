const routerUser = require("./userRouter");
const routerTask = require("./taskRouter");
const api = require("./apiAuth");
const routes = function apiRoutes(app) {
	app.use("/users", routerUser);
	app.use("/tasks", routerTask);
	app.use("/auth", api);
};

module.exports = { routes };
