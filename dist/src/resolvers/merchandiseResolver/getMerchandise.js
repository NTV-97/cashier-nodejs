"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getMerchandise = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    return _models_1.MerchandiseModel.find({
        stallCode: context.stallCode,
    });
};
exports.getMerchandise = getMerchandise;
//# sourceMappingURL=getMerchandise.js.map