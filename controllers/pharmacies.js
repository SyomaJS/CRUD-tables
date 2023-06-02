const pool = require("../config/db");

exports.postPharmacy = (req, res) => {
  try {
    const { name, address, location, phone, email, region_id, district_id } =
      req.body;
    pool.query(
      "INSERT INTO pharmacies (name, address, location, phone, email, region_id, district_id) VALUES (?,?,?,?,?,?,?)",
      [name, address, location, phone, email, region_id, district_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(201).json({
            status: 201,
            message: "Created pharmacy",
            pharmacyId: result.insertId,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getPharmacies = (req, res) => {
  try {
    pool.query("SELECT * FROM pharmacies", (err, result) => {
      if (err) {
        console.log(err);
        res.status(502).json({
          error: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          pharmacies: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updatePharmacyById = (req, res) => {
  try {
    const id = req.params.id;
    const { name, address, location, phone, email, region_id, district_id } =
      req.body;
    pool.query(
      `UPDATE pharmacies SET name = ?, address = ?, location = ?, phone = ?, email = ?, region_id = ?, district_id = ? WHERE id = ?`,
      [name, address, location, phone, email, region_id, district_id, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(502).json({
            error: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: "Updated pharmacy",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deletePharmacyById = (req, res) => {
  try {
    const id = req.params.id;
    pool.query(`DELETE FROM pharmacies WHERE id = ?`, [id], (err, result) => {
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
