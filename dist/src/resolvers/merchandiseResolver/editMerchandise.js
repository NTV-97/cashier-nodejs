"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editMerchandise = async (_, { _id, merchandiseCode, merchandiseName, description, group, type, unit, price }, context) => {
    await (0, _utils_1.permissionMerchandise)(_id, context);
    const data = {
        merchandiseCode,
        merchandiseName,
        description,
        group,
        type,
        unit,
        price,
    };
    const remove = (0, _utils_1.removeEmptyObject)(data);
    const response = await _models_1.MerchandiseModel.findByIdAndUpdate(_id, remove, { upsert: true }, (err, doc) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editMerchandise = editMerchandise;
//# sourceMappingURL=editMerchandise.js.map