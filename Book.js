const {
	getBooks,
	postBook,
	deleteBook,
	updateBook,
} = require("../controller/Book");

const express = require("express");

const router = express.Router();

router.get("/", getBooks);
router.post("/", postBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;
