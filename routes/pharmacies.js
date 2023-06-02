const express = require("express");
const router = express.Router();

const pharmacyController = require("../controllers/pharmacies");

router.post("/", pharmacyController.postPharmacy);
router.get("/", pharmacyController.getPharmacies);
router.put("/:id", pharmacyController.updatePharmacyById);
router.delete("/:id", pharmacyController.deletePharmacyById);

module.exports = router;
