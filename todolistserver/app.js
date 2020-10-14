const express = require("express");
const app = express();
const { config } = require("./config/config");
const { routes } = require("./routes/routes");

routes(app);

//const port = 3000;
app.listen(config.port, () => {
	console.log(config.port);
	console.log(`Example app listening at http://localhost:${config.port}`);
});
