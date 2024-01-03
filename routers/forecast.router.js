const { Router } = require("express");

const { getForecast } = require("../controllers/forecast");
const router = Router();

router.get("/", getForecast);

module.exports = router;
