const express = require("express");
const router = express.Router();

const regionController = require("../controllers/region");
router.post("/", regionController.postRegions);
router.get("/", regionController.getRegions);
router.put("/:id", regionController.updateRegionById);
router.delete("/:id", regionController.deleteRegionById);

module.exports = router;
