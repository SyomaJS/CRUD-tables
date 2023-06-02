const express = require("express");
const router = express.Router();

const stockController = require("../controllers/stock");

router.post("/", stockController.postStock);
router.get("/", stockController.getStocks);
router.put("/:id", stockController.updateStockById);
router.delete("/:id", stockController.deleteStockById);

module.exports = router;
