"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
var Method;
(function (Method) {
    // General
    Method["getGasPrice"] = "eth_gasPrice";
    Method["getBlockNumber"] = "eth_blockNumber";
    Method["getLogs"] = "eth_getLogs";
    // Block
    Method["getBlockByHash"] = "eth_getBlockByHash";
    Method["getBlockByNumber"] = "eth_getBlockByNumber";
    // Transaction
    Method["getTransactionByHash"] = "eth_getTransactionByHash";
    Method["getTransactionByBlockHashAndIndex"] = "eth_getTransactionByBlockHashAndIndex";
    Method["getTransactionByBlockNumberAndIndex"] = "eth_getTransactionByBlockNumberAndIndex";
    Method["getTransactionReceipt"] = "eth_getTransactionReceipt";
    Method["getTransactionCount"] = "eth_getTransactionCount";
    Method["getBlockTransactionCountByHash"] = "eth_getBlockTransactionCountByHash";
    Method["getBlockTransactionCountByNumber"] = "eth_getBlockTransactionCountByNumber";
    // Account
    // getBalance = 'eth_getBalance',
    // getAccounts = 'eth_accounts',
    // Filter
    Method["newFilter"] = "eth_newFilter";
    Method["newBlockFilter"] = "eth_newBlockFilter";
    Method["newPendingTransactionFilter"] = "eth_newPendingTransactionFilter";
    Method["uninstallFilter"] = "eth_uninstallFilter";
    Method["getFilterChanges"] = "eth_getFilterChanges";
    Method["getFilterLogs"] = "eth_getFilterLogs";
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
})(Method = exports.Method || (exports.Method = {}));
//# sourceMappingURL=method.interface.js.map