/**
 * 生成一个 FIBOS 公私钥
 */
const FIBOS = require("fibos.js");

const prikey = FIBOS.modules.ecc.randomKeySync(); //私钥
const pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥

console.log({
  prikey,
  pubkey
});