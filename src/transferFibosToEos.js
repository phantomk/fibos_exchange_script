/**
 * 跨链转账，fibos 转账到 eos 上
 */
const fibos_client = require("./lib/fibosClient");
const config = require("./config.json");

const VALUE = "0.1000" + " EOS"; //转账 EOS 数量

const ctx = fibos_client.contractSync("eosio.token");
const rs = ctx.transferSync(config.fibosAccount, "fiboscouncil", VALUE, config.eosAccount);
console.log(rs);