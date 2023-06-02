const express = require("express");
const router = express.Router();

const regionRouter = require("./region");
router.use("/region", regionRouter);

const medicineRouter = require("./medicines");
router.use("/medicines", medicineRouter);

const pharmRouter = require("./pharmacies");
router.use("/pharmacies", pharmRouter);

const medicineTypeRouter = require("./medicine_type");
router.use("/medicine/type", medicineTypeRouter);

const stockRouter = require("./stock");
router.use("/stock", stockRouter);

const districtRouter = require("./district");
router.use("/district", districtRouter);

module.exports = router;
