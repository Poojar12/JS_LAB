const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
	itemId: Number,
	itemName: String,
	itemPrice: Number,
	itemDescription: String,
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
