const express = require("express");
const safeSpaceController = require("../controllers/safeSpaceController");

const router = express.Router();

router.get("/:id", safeSpaceController.fetchCheckListData);
// router.put("/", safeSpaceModel);
// router.delete("/", safeSpaceModel);

module.exports = router;