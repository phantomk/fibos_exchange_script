const FIBOS = require("fibos.js");
const config = require('../config.json');

const eos_client = FIBOS({
  chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  keyProvider: config.eosPriKey,
  httpEndpoint: "http://mainnet.genereos.io",
  verbose: false,
  logger: {
      log: null,
      error: null
  }
})

module.exports = eos_client;