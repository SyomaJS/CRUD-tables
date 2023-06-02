const pool = require("../config/db");

exports.postMedicineType = (req, res) => {
  try {
    const { name } = req.body;
    pool.query(
      "INSERT INTO medicine_type (name) VALUES (?)",
      [name],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(201).json({
            status: 201,
            message: "Created medicine type",
            medicineTypeId: result.insertId,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getMedicineTypes = (req, res) => {
  try {
    pool.query("SELECT * FROM medicine_type", (err, result) => {
      if (err) {
        console.log(err);
        res.status(502).json({
          error: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          medicineTypes: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateMedicineTypeById = (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    pool.query(
      `UPDATE medicine_type SET name = ? WHERE id = ?`,
      [name, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: "Updated medicine type",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMedicineTypeById = (req, res) => {
  try {
    const id = req.params.id;
    pool.query(
      `DELETE FROM medicine_type WHERE id = ?`,
      [id],
      (err, result) => {
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
      }
    );
  } catch (error) {
    console.log(error);
  }
};
