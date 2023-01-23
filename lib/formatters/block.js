"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockWithTransactions = exports.block = exports.getBlockIdentifier = exports.isBlockTag = void 0;
var request = __importStar(require("../interfaces/request"));
var utils_1 = require("./utils");
var transaction_1 = require("./transaction");
var isBlockTag = function (data, full) {
    if (full === void 0) { full = false; }
    switch (data) {
        case request.EBlockTag.latest:
        case request.EBlockTag.pending:
        case request.EBlockTag.earliest:
            return true;
        case request.EBlockTagFull.safe:
        case request.EBlockTagFull.finalized:
            return full;
        default:
            return false;
    }
};
exports.isBlockTag = isBlockTag;
var getBlockIdentifier = function (value) {
    (0, utils_1.assertNotNull)(value);
    if ((0, utils_1.isNumber)(value)) {
        return (0, utils_1.numberToHex)(value);
    }
    if ((0, exports.isBlockTag)(value, true)) {
        return value;
    }
    return (0, utils_1.getHex)(value);
};
exports.getBlockIdentifier = getBlockIdentifier;
var blockHeader = function (block) { return ({
    number: block.number ? (0, utils_1.hexToNumber)(block.number) : null,
    hash: block.hash,
    parentHash: block.parentHash,
    nonce: block.nonce ? (0, utils_1.hexToNumber)(block.nonce) : null,
    sha3Uncles: block.sha3Uncles,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    transactionsRoot: block.transactionsRoot,
    stateRoot: block.stateRoot,
    receiptRoot: block.receiptRoot,
    miner: block.miner,
    difficulty: (0, utils_1.hexToNumber)(block.difficulty),
    totalDifficulty: (0, utils_1.hexToNumber)(block.totalDifficulty),
    extraData: block.extraData,
    size: (0, utils_1.hexToNumber)(block.size),
    gasLimit: (0, utils_1.hexToNumber)(block.gasLimit),
    gasUsed: (0, utils_1.hexToNumber)(block.gasUsed),
    timestamp: (0, utils_1.hexToNumber)(block.timestamp),
    uncles: block.uncles
}); };
var block = function (block) { return (__assign(__assign({}, blockHeader(block)), { transactions: block.transactions })); };
exports.block = block;
var blockWithTransactions = function (block) { return (__assign(__assign({}, blockHeader(block)), { transactions: block.transactions.map(transaction_1.transaction) })); };
exports.blockWithTransactions = blockWithTransactions;
//# sourceMappingURL=block.js.map