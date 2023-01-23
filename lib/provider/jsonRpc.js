"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpc = void 0;
var jsonRpc_1 = require("../services/jsonRpc");
var requests_1 = require("../services/requests");
var base_1 = require("./base");
var JsonRpc = /** @class */ (function (_super) {
    __extends(JsonRpc, _super);
    function JsonRpc(provider) {
        var _this = _super.call(this, provider) || this;
        _this.client = new jsonRpc_1.JsonRpc(provider);
        return _this;
    }
    /** Get the current gas price in wei */
    JsonRpc.prototype.getGasPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getGasPrice();
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    /** Get the number of the last confirmed block */
    JsonRpc.prototype.getBlockNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getBlockNumber();
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getLogs = function (filters) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getLogs(filters);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getBlock = function (blockIdentifier, returnTransactions) {
        if (blockIdentifier === void 0) { blockIdentifier = 'latest'; }
        if (returnTransactions === void 0) { returnTransactions = false; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getBlock(blockIdentifier, returnTransactions);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getTransaction = function (data, position) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getTransaction(data, position);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getTransactionReceipt = function (transactionHash) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getTransactionReceipt(transactionHash);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getBlockTransactionCount = function (blockIdentifier) {
        if (blockIdentifier === void 0) { blockIdentifier = 'latest'; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getBlockTransactionCount(blockIdentifier);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getTransactionCount = function (address, blockIdentifier) {
        if (blockIdentifier === void 0) { blockIdentifier = 'latest'; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getTransactionCount(address, blockIdentifier);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.newFilter = function (filterOption) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.newFilter(filterOption);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.newBlockFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.newBlockFilter();
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.newPendingTransactionFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.newPendingTransactionFilter();
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.uninstallFilter = function (filterId) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.uninstallFilter(filterId);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getFilterChanges = function (filterId) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getFilterChanges(filterId);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.getFilterLogs = function (filterId) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = requests_1.requests.getFilterLogs(filterId);
                return [2 /*return*/, this.call(request)];
            });
        });
    };
    JsonRpc.prototype.call = function (_a) {
        var method = _a.method, params = _a.params, formatter = _a.formatter;
        return __awaiter(this, void 0, void 0, function () {
            var data, element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.call({ method: method, params: params })];
                    case 1:
                        data = _b.sent();
                        if ('error' in data && data.error) {
                            throw new Error("Error: ".concat(data.error.message));
                        }
                        element = 'result' in data ? data.result : null;
                        return [2 /*return*/, element
                                ? formatter
                                    ? formatter(element)
                                    : element
                                : null];
                }
            });
        });
    };
    return JsonRpc;
}(base_1.BaseProvider));
exports.JsonRpc = JsonRpc;
//# sourceMappingURL=jsonRpc.js.map