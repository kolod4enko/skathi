"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.toHexString = exports.toLowerCase = exports.hexToNumber = exports.getHex = exports.isHex = exports.numberToHex = exports.assertNotType = exports.getTopics = exports.getAddress = exports.assertNotNull = void 0;
var assertNotNull = function (value, msg) {
    if (!value) {
        throw new Error(msg || 'Value cannot be empty');
    }
};
exports.assertNotNull = assertNotNull;
var getAddress = function (value) {
    return (0, exports.getHex)(value);
};
exports.getAddress = getAddress;
var getTopics = function (value) {
    if (!Array.isArray(value)) {
        throw new Error('Invalid value');
    }
    return (0, exports.getHex)(value);
};
exports.getTopics = getTopics;
var assertNotType = function (value, type, msg) {
    if (typeof value !== type) {
        throw new Error(msg || 'Value must be a number');
    }
};
exports.assertNotType = assertNotType;
var numberToHex = function (value) {
    return (0, exports.isNumber)(value) ? "0x".concat(value.toString(16)) : '';
};
exports.numberToHex = numberToHex;
var isHex = function (value) {
    return (typeof value === 'string' && !!value.match(/^0x[0-9A-Fa-f]*$/));
};
exports.isHex = isHex;
var getHex = function (value) {
    if (Array.isArray(value)) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (Array.isArray(item)) {
                (0, exports.getHex)(item);
            }
            if (!(0, exports.isHex)(item)) {
                throw new Error('Invalid value');
            }
        }
    }
    if (!(0, exports.isHex)(value)) {
        throw new Error('Invalid value');
    }
    return value;
};
exports.getHex = getHex;
var hexToNumber = function (value) {
    if (!value) {
        throw new Error('Hex cannot be empty');
    }
    if (typeof value === 'string' && !(0, exports.isHex)(value)) {
        throw new Error("The value of \"".concat(value, "\" is not a hex string"));
    }
    return parseInt(value);
};
exports.hexToNumber = hexToNumber;
var toLowerCase = function (value) { return value.toLowerCase(); };
exports.toLowerCase = toLowerCase;
var toHexString = function (value) {
    if (!value)
        if (typeof value !== 'string') {
            throw new Error('Hex cannot be empty');
        }
    return '';
};
exports.toHexString = toHexString;
var isNumber = function (data) { return typeof data === 'number'; };
exports.isNumber = isNumber;
// export const isAddress = (address: string): boolean => {
//   if (typeof address !== 'string') {
//     throw new Error(`The value of "${address}" is not a string`);
//   }
//
//   if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
//     if (address.substring(0, 2) !== "0x") { address = "0x" + address; }
//   } else {
//     throw new Error('Invalid address')
//   }
// };
//# sourceMappingURL=utils.js.map