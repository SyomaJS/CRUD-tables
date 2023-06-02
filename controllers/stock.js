const pool = require("../config/db");

exports.postStock = (req, res) => {
  try {
    const { medicine_id, pharmacy_id, quantity } = req.body;
    pool.query(
      "INSERT INTO stock (medicine_id, pharmacy_id, quantity) VALUES (?, ?, ?)",
      [medicine_id, pharmacy_id, quantity],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(201).json({
            status: 201,
            message: "Created stock",
            stockId: result.insertId,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getStocks = (req, res) => {
  try {
    pool.query("SELECT * FROM stock", (err, result) => {
      if (err) {
        console.log(err);
        res.status(502).json({
          error: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          stocks: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateStockById = (req, res) => {
  try {
    const id = req.params.id;
    const { medicine_id, pharmacy_id, quantity } = req.body;
    pool.query(
      `UPDATE stock SET medicine_id = ?, pharmacy_id = ?, quantity = ? WHERE id = ?`,
      [medicine_id, pharmacy_id, quantity, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: "Updated stock",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteStockById = (req, res) => {
  try {
    const id = req.params.id;
    pool.query(`DELETE FROM stock WHERE id = ?`, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(502).json({
          error: err.message,
        });
      } else if (result.affectedRows === 0) {
        res.status(404).json({
          status: 404,
          message: "Already deleted",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Deleted successfully",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
