"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUnitMerchandise = void 0;
const _models_1 = require("@models");
const _utils_1 = require("@utils");
const deleteUnitMerchandise = async (_, { _id }, context) => {
    await (0, _utils_1.permissionMerchandise)(_id, context);
    const res = await _models_1.UnitMerchandiseModel.findByIdAndDelete(_id);
    if (res) {
        return {
            message: 'Delete successfully',
            success: true,
        };
    }
};
exports.deleteUnitMerchandise = deleteUnitMerchandise;
//# sourceMappingURL=deleteUnitMerchandise.js.map