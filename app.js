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

// cart total
let cartTotal = 0;
// user info
let userInfo = {};

app.get("/diagnostic", (req, res) => {
	res.sendFile(path.join(__dirname + "/src/diagnostic/index.html"));
});

app.get("/", (req, res) => {
	res.render("index", {
		items: Items
	});
});

app.post("/remove-item", (req, res) => {
	const { id } = req.body;
	Items.splice(
		Items.findIndex(item => item.id === id),
		1
	);
	return res.status(201).json({ msg: "success" });
});

app.post("/update-quantity", (req, res) => {
	const { id, quantity } = req.body;
	const index = Items.findIndex(item => item.id == id);
	Items[index].quantity = quantity;

	const newTotal = Items[index].price * quantity;
	Items[index].total = newTotal;

	return res.status(201).json({ msg: "success" });
});

app.post("/cart-total", (req, res) => {
	const { total } = req.body;

	cartTotal = total;
	return res.status(201).json({ msg: "success" });
});

app.get("/checkout", (req, res) => {
	res.render("checkout", {
		total: cartTotal
	});
});

app.post("/pay", (req, res) => {
	const {
		firstName,
		lastName,
		email,
		address,
		city,
		state,
		country,
		total
	} = req.body;

	userInfo = {
		firstName,
		lastName,
		email,
		address,
		city,
		state,
		country,
		total
	};
	res.redirect("/success");
});

app.get("/success", (req, res) => {
	res.render("success", {
		cartTotal,
		items: Items,
		userInfo
	});
});

app.listen(port, () =>
	console.log(`ProdPerfect worktest app listening on port ${port}`)
);
