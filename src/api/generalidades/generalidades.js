import { connection } from "../../database.js";

export const getGeneralidades = async (req, res) => {
  const brand = req.params.brand;
  connection.query(
    "SELECT * FROM generalidades WHERE keyword = '" + brand + "'",
    function (err, results, fields) {
        return res.status(200).json({ results });
    }
  );
};
