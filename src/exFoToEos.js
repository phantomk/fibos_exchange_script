/**
 * fo 兑换 eos
 */
const fibos_client = require('./lib/fibosClient');
const config = require('./config.json');

const VALUE = '567.0000' + ' FO@eosio'; // 兑换的 fo 数量

const ctx = fibos_client.contractSync("eosio.token");
const result = ctx.exchangeSync(config.fibosAccount, VALUE, `0.0000 EOS@eosio`, `exchange FO to EOS`, {
  authorization: config.fibosAccount
});
console.log(result);
