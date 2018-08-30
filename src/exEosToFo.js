/**
 * eos 兑换 fo
 */
const fibos_client = require('./lib/fibosClient');
const config = require('./config.json');

const VALUE = '1.0000' + ' EOS@eosio'; // 兑换的 eos 数量

const ctx = fibos_client.contractSync("eosio.token");
const result = ctx.exchangeSync(config.fibosAccount, VALUE, `0.0000 FO@eosio`, `exchange EOS to FO`, {
  authorization: config.fibosAccount
});
console.log(result);