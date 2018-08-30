/**
 * 跨链转账，eos 转账到 fibos 上
 */
const eos_client = require("./lib/eosClinet");
const config = require("./config.json");

const VALUE = "1.0000" + " EOS"; //转账 EOS 数量

const ctx = eos_client.contractSync("eosio.token");
const rs = ctx.transferSync(config.eosAccount, "fiboscouncil", VALUE, config.fibosAccount);
console.log(rs);
