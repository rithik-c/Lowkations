const express = require("express");
const { locations } = require("../controllers/categoriesController");

const router = express.Router();

router.get("/", locations);

module.exports = router;