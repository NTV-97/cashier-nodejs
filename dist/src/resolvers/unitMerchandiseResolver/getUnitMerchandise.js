"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getUnitMerchandise = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    return _models_1.UnitMerchandiseModel.find({
        stallCode: context.stallCode,
    });
};
exports.getUnitMerchandise = getUnitMerchandise;
//# sourceMappingURL=getUnitMerchandise.js.map