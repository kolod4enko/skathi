"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.filterOptions = void 0;
var utils_1 = require("./utils");
var block_1 = require("./block");
var filterOptions = function (data) {
    if ('fromBlock' in data && data.fromBlock) {
        data.fromBlock = (0, block_1.getBlockIdentifier)(data.fromBlock);
    }
    if ('toBlock' in data && data.toBlock) {
        data.toBlock = (0, block_1.getBlockIdentifier)(data.toBlock);
    }
    if ('blockHash' in data && data.blockHash) {
        data.blockHash = (0, block_1.getBlockIdentifier)(data.blockHash);
    }
    if (data.address) {
        data.address = (0, utils_1.getAddress)(data.address);
    }
    if (data.topics) {
        data.topics = (0, utils_1.getTopics)(data.topics);
    }
    return data;
};
exports.filterOptions = filterOptions;
var log = function (data) { return ({
    address: data.address,
    topics: data.topics,
    data: data.data,
    blockHash: data.blockHash,
    blockNumber: (0, utils_1.hexToNumber)(data.blockNumber),
    transactionHash: data.transactionHash,
    transactionIndex: (0, utils_1.hexToNumber)(data.transactionIndex),
    logIndex: (0, utils_1.hexToNumber)(data.logIndex)
}); };
exports.log = log;
//# sourceMappingURL=log.js.map