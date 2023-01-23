"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionReceiptLog = exports.transactionReceipt = exports.transaction = void 0;
var utils_1 = require("./utils");
var transaction = function (transaction) { return ({
    hash: transaction.hash,
    nonce: (0, utils_1.hexToNumber)(transaction.nonce),
    from: transaction.from,
    to: transaction.to,
    value: (0, utils_1.hexToNumber)(transaction.value),
    gas: (0, utils_1.hexToNumber)(transaction.gas),
    gasPrice: (0, utils_1.hexToNumber)(transaction.gasPrice),
    input: transaction.input,
    blockHash: transaction.blockHash,
    blockNumber: transaction.blockNumber ? (0, utils_1.hexToNumber)(transaction.blockNumber) : null,
    transactionIndex: transaction.transactionIndex ? (0, utils_1.hexToNumber)(transaction.transactionIndex) : null,
    r: transaction.r,
    s: transaction.s,
    v: transaction.v,
}); };
exports.transaction = transaction;
var transactionReceipt = function (transaction) { return ({
    transactionHash: transaction.transactionHash,
    transactionIndex: (0, utils_1.hexToNumber)(transaction.transactionIndex),
    blockHash: transaction.blockHash,
    blockNumber: (0, utils_1.hexToNumber)(transaction.blockNumber),
    from: transaction.from,
    to: transaction.to ? transaction.to : null,
    contractAddress: transaction.contractAddress ? transaction.contractAddress : null,
    cumulativeGasUsed: (0, utils_1.hexToNumber)(transaction.cumulativeGasUsed),
    effectiveGasPrice: (0, utils_1.hexToNumber)(transaction.effectiveGasPrice),
    gasUsed: (0, utils_1.hexToNumber)(transaction.gasUsed),
    logsBloom: transaction.logsBloom,
    logs: transaction.logs.map(exports.transactionReceiptLog),
    status: (0, utils_1.hexToNumber)(transaction.status),
    type: (0, utils_1.hexToNumber)(transaction.type),
}); };
exports.transactionReceipt = transactionReceipt;
var transactionReceiptLog = function (log) { return ({
    address: log.address,
    topics: log.topics,
    data: log.data,
    blockHash: log.blockHash,
    blockNumber: (0, utils_1.hexToNumber)(log.blockNumber),
    transactionHash: log.transactionHash,
    logIndex: (0, utils_1.hexToNumber)(log.logIndex),
    transactionIndex: (0, utils_1.hexToNumber)(log.transactionIndex),
    removed: log.removed
}); };
exports.transactionReceiptLog = transactionReceiptLog;
//# sourceMappingURL=transaction.js.map