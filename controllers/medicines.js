const pool = require("../config/db");

exports.postMedicine = (req, res) => {
  try {
    const { name, manafacture, medicine_type, price, expiry_date, info } =
      req.body;
    pool.query(
      "INSERT INTO medicines (name, manafacture, medicine_type, price, expiry_date, info) VALUES (?,?,?,?,?,?)",
      [name, manafacture, medicine_type, price, expiry_date, info],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(201).json({
            status: 201,
            message: "Created medicine",
            medicineId: result.insertId,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getMedicines = (req, res) => {
  try {
    pool.query("SELECT * FROM medicines", (err, result) => {
      if (err) {
        console.log(err);
        res.status(502).json({
          error: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          medicines: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateMedicineById = (req, res) => {
  try {
    const id = req.params.id;
    const { name, manafacture, medicine_type, price, expiry_date, info } =
      req.body;
    pool.query(
      `UPDATE medicines SET name = ?, manafacture = ?, medicine_type = ?, price = ?, expiry_date = ?, info = ? WHERE id = ?`,
      [name, manafacture, medicine_type, price, expiry_date, info, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: "Updated medicine",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMedicineById = (req, res) => {
  try {
    const id = req.params.id;
    pool.query(`DELETE FROM medicines WHERE id = ?`, [id], (err, result) => {
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
          message: "Deleted successful",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
