"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    // Invalid JSON was received by the server.
    // An error occurred on the server while parsing the JSON text.
    ErrorCode[ErrorCode["ParseError"] = -32700] = "ParseError";
    // The JSON sent is not a valid Request object.
    ErrorCode[ErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    // The method does not exist / is not available.
    ErrorCode[ErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    // Invalid method parameter(s).
    ErrorCode[ErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    // Internal JSON-RPC error.
    ErrorCode[ErrorCode["InternalError"] = -32603] = "InternalError";
    // The server is currently unable to handle the request due to a temporary overload or maintenance.
    ErrorCode[ErrorCode["ServerError"] = -32000] = "ServerError";
    // Invalid Ethereum address.
    ErrorCode[ErrorCode["InvalidAddress"] = -32001] = "InvalidAddress";
    // Invalid value for the "value" field in a call or transact.
    ErrorCode[ErrorCode["InvalidValue"] = -32002] = "InvalidValue";
    // Nonce has already been used.
    ErrorCode[ErrorCode["NonceTooLow"] = -32003] = "NonceTooLow";
    // Transaction cost exceeds current gas limit.
    ErrorCode[ErrorCode["GasLimitExceeded"] = -32004] = "GasLimitExceeded";
    // The data field is too long.
    ErrorCode[ErrorCode["DataTooLong"] = -32005] = "DataTooLong";
    // Invalid signature.
    ErrorCode[ErrorCode["InvalidSignature"] = -32006] = "InvalidSignature";
    // The server returned an empty response.
    // This may occur if the server is not running or if there is a network error.
    ErrorCode[ErrorCode["EmptyResponse"] = -32007] = "EmptyResponse";
    // The server returned a non-JSON response.
    ErrorCode[ErrorCode["NonJsonResponse"] = -32008] = "NonJsonResponse";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
//# sourceMappingURL=error.interface.js.map