const routerUser = require("./userRouter");
const routerTask = require("./taskRouter");

const routes = function apiRoutes(app) {
	app.use("/users", routerUser);
	app.use("/tasks", routerTask);
};

module.exports = { routes };
