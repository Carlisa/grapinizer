const grapinizer = require("../lib");

grapinizer("Răsăritul de soare din această dimineață a fost minunat.", (err, res) => {
    console.log(err || res);
    // => Rasaritul de,soare din aciasta dininiața a fost minunat.
});
