const express = require("express");
const router = express.Router()
const conclusionsController = require("../controllers/conclusion-controller")

router.get("/", conclusionsController.getAllConclusions);

module.exports = router;