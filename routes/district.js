const express = require("express");
const router = express.Router();

const districtController = require("../controllers/district");

router.post("/", districtController.postDistrict);
router.get("/", districtController.getDistricts);
router.put("/:id", districtController.updateDistrictById);
router.delete("/:id", districtController.deleteDistrictById);

module.exports = router;
