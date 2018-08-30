const http = require('http');
const config = require('./config.json');

const httpClient = new http.Client();
const httpServerHost = "http://tunnel.fibos.io/1.0/app/token/create";
const account = config.fibosAccount;  //你的 FIBOS 账户名
const pubkey = config.fibosPubkey; //你的 FIBOS 公钥
const rs = httpClient.post(httpServerHost, {
  json: {
    account: account,
    pubkey: pubkey
  }
}).json()
console.log(rs);