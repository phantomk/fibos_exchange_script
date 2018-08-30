const FIBOS = require("fibos.js");
const config = require('../config.json');

const fibos_client = FIBOS({
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    keyProvider: config.fibosPriKey,
    httpEndpoint: config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
});

module.exports = fibos_client;