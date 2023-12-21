const express = require("express");
const safeSpaceModel = require("../controllers/safeSpaceController");

const router = express.Router();

router.post("/", safeSpaceModel.createFormData );

module.exports = router;