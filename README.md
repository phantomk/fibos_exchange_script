### 注意⚠️
- 本脚本在 MAC OS 下测试通过
- 创建账户有调用频度限制（根据 ip），一小时一次，可以使用代理，切换 ip 后重试
- eos 跨链转账到 fibos 大概需要 2～3 分钟
- 提现 eos 到 eos 主链，暂时貌似是无法即时到账的
- fibos 网络暂不稳定，注意风险

### 安装 FIBOS

```bash
curl -s https://fibos.io/download/installer.sh |sh
```

### 下载该脚本

```bash
git clone https://github.com/phantomk/fibos_exchange_script.git
cd src
```

### 生成 fibos 公私钥
将生成的公私钥保存到 `config.json` 文件的 `fibosPubkey` 和 `fibosPrikey`

```bash
fibos generateKey.js
```

### 创建 fibos 账户
将账户名配置到 `config.json` 的 `fibosAccount` 中，然后执行

```bash
fibos createAccount.js
```

### 跨链转账，从 EOS 到 FIBOS
将 eos 的账户名和私钥分别填入 `config.json` 的 eosAccount 和 eosPriKey，修改 transferEosToFibos.js 中的 VALUE

```bash
fibos transferEosToFibos.js
```

### Eos 兑换 Fo
修改 exEosToFo.js 的 VALUE（兑换的 EOS 数量）

```bash
fibos exEosToFo.js
```

### Fo 兑换 Eos

```bash
fibos exFoToEos.js
```

### 跨链转账，从 FIBOS 到 EOS

```bash
fibos transferFibosToEos.js
```

## License
[Apache-2.0](LICENSE)