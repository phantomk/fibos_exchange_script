/**
 * 查询 FIBOS 账户
 */
const fibos_client = require('./lib/fibosClient');
const config = require('./config.json');
const rs = fibos_client.getTableRowsSync(true, "eosio.token", config.fibosAccount, "accounts");
console.log(rs);