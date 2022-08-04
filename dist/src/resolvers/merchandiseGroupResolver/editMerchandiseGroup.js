"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMerchandiseGroup = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editMerchandiseGroup = async (_, { _id, merchandiseGroupCode, merchandiseGroupName, description }, context) => {
    await (0, _utils_1.permissionMerchandiseGroup)(_id, context);
    const data = {
        merchandiseGroupCode,
        merchandiseGroupName,
        description,
    };
    const remove = (0, _utils_1.removeEmptyObject)(data);
    const response = await _models_1.MerchandiseGroupModel.findByIdAndUpdate(_id, remove, { upsert: true }, (err, doc) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editMerchandiseGroup = editMerchandiseGroup;
//# sourceMappingURL=editMerchandiseGroup.js.map