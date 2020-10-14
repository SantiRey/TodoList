const express = require("express");
const app = express();
const { config } = require("./config/config");
const { routes } = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
routes(app);

//const port = 3000;
app.listen(config.port, () => {
	console.log(`Example app listening at http://localhost:${config.port}`);
});
