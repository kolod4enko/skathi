export enum Method {
  // General
  getGasPrice = 'eth_gasPrice',
  getBlockNumber = 'eth_blockNumber',
  getLogs = 'eth_getLogs',

  // Block
  getBlockByHash = 'eth_getBlockByHash',
  getBlockByNumber = 'eth_getBlockByNumber',

  // Transaction
  getTransactionByHash = 'eth_getTransactionByHash',
  getTransactionByBlockHashAndIndex = 'eth_getTransactionByBlockHashAndIndex',
  getTransactionByBlockNumberAndIndex = 'eth_getTransactionByBlockNumberAndIndex',
  getTransactionReceipt = 'eth_getTransactionReceipt',
  getTransactionCount = 'eth_getTransactionCount',
  getBlockTransactionCountByHash = 'eth_getBlockTransactionCountByHash',
  getBlockTransactionCountByNumber = 'eth_getBlockTransactionCountByNumber',

  // Account
  // getBalance = 'eth_getBalance',
  // getAccounts = 'eth_accounts',

  // Filter
  newFilter = 'eth_newFilter',
  newBlockFilter = 'eth_newBlockFilter',
  newPendingTransactionFilter = 'eth_newPendingTransactionFilter',
  uninstallFilter = 'eth_uninstallFilter',
  getFilterChanges = 'eth_getFilterChanges',
  getFilterLogs = 'eth_getFilterLogs',

  // Uncle
  // getUncleByBlockHashAndIndex = 'eth_getUncleByBlockHashAndIndex',
  // getUncleByBlockNumberAndIndex = 'eth_getUncleByBlockNumberAndIndex',
  // getUncleCountByBlockHash = 'eth_getUncleCountByBlockHash',
  // getUncleCountByBlockNumber = 'eth_getUncleCountByBlockNumber',

  // Transaction actions
  // ethSign = 'eth_sign',
  // ethSendTransaction = 'eth_sendTransaction',
  // ethSendRawTransaction = 'eth_sendRawTransaction',
  // ethCall = 'eth_call',
  // ethEstimateGas = 'eth_estimateGas',

  // Other
  // getClientVersion = 'web3_clientVersion',
  // getSha3 = 'web3_sha3',
  // getVersion = 'net_version',
  // getListening = 'net_listening',
  // getPeerCount = 'net_peerCount',
  // getProtocolVersion = 'eth_protocolVersion',
  // getSyncing = 'eth_syncing',
  // getCoinbase = 'eth_coinbase',
  // getMining = 'eth_mining',
  // getHashrate = 'eth_hashrate',
  // getStorageAt = 'eth_getStorageAt',
  // getCode = 'eth_getCode',
  // getCompilers = 'eth_getCompilers',
  // ethCompileLLL = 'eth_compileLLL',
  // ethCompileSolidity = 'eth_compileSolidity',
  // ethCompileSerpent = 'eth_compileSerpent',
  // ethGetWork = 'eth_getWork',
  // ethSubmitWork = 'eth_submitWork',
  // ethSubmitHashrate = 'eth_submitHashrate',
  // dbPutString = 'db_putString',
  // dbGetString = 'db_getString',
  // dbPutHex = 'db_putHex',
  // dbGetHex = 'db_getHex',
  // shhPost = 'shh_post',
  // shhVersion = 'shh_version',
  // shhNewIdentity = 'shh_newIdentity',
  // shhHasIdentity = 'shh_hasIdentity',
  // shhNewGroup = 'shh_newGroup',
  // shhAddToGroup = 'shh_addToGroup',
  // shhNewFilter = 'shh_newFilter',
  // shhUninstallFilter = 'shh_uninstallFilter',
  // shhGetFilterChanges = 'shh_getFilterChanges',
  // shhGetMessages = 'shh_getMessages',
}
