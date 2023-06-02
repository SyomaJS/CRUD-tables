const express = require("express");
const router = express.Router();

const medicineController = require("../controllers/medicines");

router.post("/", medicineController.postMedicine);
router.get("/", medicineController.getMedicines);
router.put("/:id", medicineController.updateMedicineById);
router.delete("/:id", medicineController.deleteMedicineById);

module.exports = router;
