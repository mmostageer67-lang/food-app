const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    JWT.verify(token, process.env.GWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).json({
          succes: false,
          message: "PLEASE PROVIDE THE USER TOKEN!",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });

  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "ERROR IN API",
      error: error.message,
    });
  }
};