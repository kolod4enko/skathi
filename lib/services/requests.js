"use strict";
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
exports.requests = exports.Requests = void 0;
var blockchain_1 = require("../interfaces/blockchain");
var formatter = __importStar(require("../formatters"));
var formatters_1 = require("../formatters");
var Requests = /** @class */ (function () {
    function Requests() {
        var _this = this;
        this.getGasPrice = function () {
            return _this.getRequest(blockchain_1.Method.getGasPrice, null, null, formatter.hexToNumber);
        };
        this.getBlockNumber = function () {
            return _this.getRequest(blockchain_1.Method.getBlockNumber, null, null, formatter.hexToNumber);
        };
        this.getTransactionReceipt = function (transactionHash) {
            return _this.getRequest(blockchain_1.Method.getTransactionReceipt, [transactionHash], [formatter.getHex], formatter.transactionReceipt);
        };
        this.newBlockFilter = function () {
            return _this.getRequest(blockchain_1.Method.newBlockFilter, null, null, formatter.hexToNumber);
        };
        this.newPendingTransactionFilter = function () {
            return _this.getRequest(blockchain_1.Method.newPendingTransactionFilter, null, null, formatter.hexToNumber);
        };
        this.uninstallFilter = function (filterId) {
            return _this.getRequest(blockchain_1.Method.uninstallFilter, [filterId], [], null);
        };
        this.getFilterChanges = function (filterId) {
            return _this.getRequest(blockchain_1.Method.getFilterChanges, [filterId], [], null);
        };
        this.getFilterLogs = function (filterId) {
            return _this.getRequest(blockchain_1.Method.getFilterLogs, [filterId], [], null);
        };
    }
    Requests.prototype.getLogs = function (filterOptions) {
        return this.getRequest(blockchain_1.Method.getLogs, [filterOptions], [formatter.filterOptions], formatter.log);
    };
    Requests.prototype.getBlock = function (blockIdentifier, returnTransactions) {
        if (blockIdentifier === void 0) { blockIdentifier = 'latest'; }
        if (returnTransactions === void 0) { returnTransactions = false; }
        return this.getRequest((formatter.isNumber(blockIdentifier) || formatter.isBlockTag(blockIdentifier))
            ? blockchain_1.Method.getBlockByNumber
            : blockchain_1.Method.getBlockByHash, [blockIdentifier, returnTransactions], [formatter.getBlockIdentifier], !returnTransactions ? formatter.block : formatter.blockWithTransactions);
    };
    Requests.prototype.getTransaction = function (data, position) {
        return this.getRequest(position
            ? ((formatter.isNumber(data) || formatter.isBlockTag(data))
                ? blockchain_1.Method.getTransactionByBlockNumberAndIndex
                : blockchain_1.Method.getTransactionByBlockHashAndIndex)
            : blockchain_1.Method.getTransactionByHash, [data, position], [position ? formatter.getBlockIdentifier : formatter.getHex, formatter.getHex], formatter.transaction);
    };
    Requests.prototype.getBlockTransactionCount = function (blockIdentifier) {
        if (blockIdentifier === void 0) { blockIdentifier = 'latest'; }
        return this.getRequest((formatter.isNumber(blockIdentifier) || formatter.isBlockTag(blockIdentifier))
            ? blockchain_1.Method.getBlockTransactionCountByNumber
            : blockchain_1.Method.getBlockTransactionCountByHash, [blockIdentifier], [formatter.getBlockIdentifier], formatters_1.hexToNumber);
    };
    Requests.prototype.getTransactionCount = function (address, blockIdentifier) {
        if (blockIdentifier === void 0) { blockIdentifier = 'latest'; }
        return this.getRequest(blockchain_1.Method.getTransactionCount, [address, blockIdentifier], [formatter.getHex, formatter.getBlockIdentifier], formatters_1.hexToNumber);
    };
    Requests.prototype.newFilter = function (filterOptions) {
        return this.getRequest(blockchain_1.Method.newFilter, [filterOptions], [formatter.filterOptions], formatter.hexToNumber);
    };
    Requests.prototype.getRequest = function (method, params, inputFormatter, outputFormatter) {
        if (params === void 0) { params = []; }
        if (inputFormatter === void 0) { inputFormatter = []; }
        if (params && params.length !== 0 && inputFormatter && inputFormatter.length !== 0) {
            params = params.map(function (item, key) { return (item && inputFormatter[key]) ? inputFormatter[key](item) : item; });
        }
        return { method: method, params: params, formatter: outputFormatter };
    };
    return Requests;
}());
exports.Requests = Requests;
exports.requests = new Requests();
//# sourceMappingURL=requests.js.map