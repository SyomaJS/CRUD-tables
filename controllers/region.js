const pool = require("../config/db");

exports.postRegions = (req, res) => {
  try {
    const { id, name } = req.body;
    pool.query(
      "INSERT INTO region (id, name) VALUES (?,?)",
      [id, name],
      (err, result) => {
        if (err) {
          console.log(err);
          res.writeHead(502, { "Content-Type": "application/json utf-8" });
          const resp = {
            error: err.message,
          };
          res.end(JSON.stringify(resp));
        } else {
          res.writeHead(201, "content-type: application/json");
          const resp = {
            status: 201,
            message: "Created region",
            regionId: result.insertId,
          };

          res.end(JSON.stringify(resp));
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getRegions = (req, res) => {
  try {
    pool.query("SELECT * FROM region", (err, result) => {
      if (err) {
        console.log(err);
        res.writeHead(502, { "Content-Type": "application/json utf-8" });
        const resp = {
          error: err.message,
        };
        res.end(JSON.stringify(resp));
      } else {
        res.writeHead(201, "content-type: application/json");
        const resp = {
          status: 200,
          regions: result,
        };

        res.end(JSON.stringify(resp));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateRegionById = (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    pool.query(
      `update region set name = ? where id = ?`,
      [name, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.writeHead(502, { "Content-Type": "application/json utf-8" });
          const resp = {
            error: err.message,
          };
          res.end(JSON.stringify(resp));
        } else {
          res.writeHead(201, "content-type: application/json");
          const resp = {
            status: 201,
            message: "UPDATED",
          };

          res.end(JSON.stringify(resp));
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
exports.deleteRegionById = (req, res) => {
  try {
    const id = req.params.id;
    pool.query(`delete from region where id = ?`, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.writeHead(502, { "Content-Type": "application/json utf-8" });
        const resp = {
          error: err.message,
        };
        res.end(JSON.stringify(resp));
      } else if (result.affectedRows === 0) {
        res.end(
          JSON.stringify({
            status: 404,
            message: "Already deleted",
          })
        );
      } else {
        res.writeHead(201, "content-type: application/json");
        const resp = {
          status: 201,
          message: "DELETED SUCCESSFUL",
        };

        res.end(JSON.stringify(resp));
      }
    });
  } catch (error) {
    console.log(error);
  }
};
