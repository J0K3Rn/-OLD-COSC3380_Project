const controller = require("../controllers/test.controller");
const router = require("express").Router()

//this calls the function createanimal in file test.controller.js
router.post("/api/CreateAnimal", controller.createanimal)

module.exports = router;
