const request = require("request");

const API_URL = "http://grapinizer.com/grapinizer.php";

/**
 * grapinizer
 * Transform the input text into a malformed Romanian grammar version of it.
 *
 * @name grapinizer
 * @function
 * @param {String} input The input string (Romanian text).
 * @param {Function} cb The callback function.
 */
module.exports = function grapinizer (input, cb) {
    request({
        url: API_URL
      , method: "POST"
      , json: true
      , form: {
            textu_de_la_user: input
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
