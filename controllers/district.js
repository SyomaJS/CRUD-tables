const pool = require("../config/db");

exports.postDistrict = (req, res) => {
  try {
    const { name, region_id } = req.body;
    pool.query(
      "INSERT INTO district (name, region_id) VALUES (?, ?)",
      [name, region_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(201).json({
            status: 201,
            message: "Created district",
            districtId: result.insertId,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getDistricts = (req, res) => {
  try {
    pool.query("SELECT * FROM district", (err, result) => {
      if (err) {
        console.log(err);
        res.status(502).json({
          error: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          districts: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateDistrictById = (req, res) => {
  try {
    const id = req.params.id;
    const { name, region_id } = req.body;
    pool.query(
      `UPDATE district SET name = ?, region_id = ? WHERE id = ?`,
      [name, region_id, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: "Updated district",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteDistrictById = (req, res) => {
  try {
    const id = req.params.id;
    pool.query(`DELETE FROM district WHERE id = ?`, [id], (err, result) => {
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
