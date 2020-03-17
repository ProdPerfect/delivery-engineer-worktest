const express = require("express");
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const Items = require("./items");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// All views in vies folder
app.set("views", path.join(__dirname, "views"));

// Use pug templating
app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index", {
		items: Items
	});
});

app.listen(port, () =>
	console.log(`ProdPerfect worktest app listening on port ${port}`)
);
