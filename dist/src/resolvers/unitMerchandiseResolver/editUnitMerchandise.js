"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUnitMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editUnitMerchandise = async (_, { _id, unitCode, unitName, description }, context) => {
    await (0, _utils_1.permissionUnitMerchandise)(_id, context);
    const data = {
        unitCode,
        unitName,
        description,
    };
    const remove = (0, _utils_1.removeEmptyObject)(data);
    const response = await _models_1.UnitMerchandiseModel.findByIdAndUpdate(_id, remove, { upsert: true }, (err, doc) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editUnitMerchandise = editUnitMerchandise;
//# sourceMappingURL=editUnitMerchandise.js.map