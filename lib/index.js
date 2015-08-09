var Request = require("request");

const API_URL = "http://grapinizer.com/grapinizer.php";

function Grapinizer(input, cb) {
    Request({
        url: API_URL
      , method: "POST"
      , json: true
      , form: {
            textu_de_la_tugurlan: input
        }
    }, function (err, res, body) {
        cb(
            err
          , body
              .slice(10, -19)
              .replace(/\\u021b/g, "ț")
              .replace(/\\u0219/g, "ș")
              .replace(/\\n/g, "\n")
        );
    });
}

module.exports = Grapinizer;
