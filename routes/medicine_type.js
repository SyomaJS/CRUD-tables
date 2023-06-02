const express = require("express");
const router = express.Router();

const medicineTypeController = require("../controllers/medicine_type");

router.post("/", medicineTypeController.postMedicineType);
router.get("/", medicineTypeController.getMedicineTypes);
router.put("/:id", medicineTypeController.updateMedicineTypeById);
router.delete("/:id", medicineTypeController.deleteMedicineTypeById);

module.exports = router;
