const express = require("express");
var cors = require("cors");
var app = express();
const { config } = require("./config/config");
const { routes } = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
routes(app);
//const port = 3000;
app.listen(config.port, () => {
	console.log(`Example app listening at http://localhost:${config.port}`);
});
