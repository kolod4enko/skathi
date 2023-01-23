"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
var BaseProvider = /** @class */ (function () {
    function BaseProvider(provider) {
        this.provider = provider;
    }
    Object.defineProperty(BaseProvider.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        set: function (value) {
            this._provider = value;
        },
        enumerable: false,
        configurable: true
    });
    return BaseProvider;
}());
exports.BaseProvider = BaseProvider;
//# sourceMappingURL=base.js.map