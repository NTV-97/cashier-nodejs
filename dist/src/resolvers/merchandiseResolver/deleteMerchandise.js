"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMerchandise = void 0;
const _models_1 = require("@models");
const _utils_1 = require("@utils");
const deleteMerchandise = async (_, { _id }, context) => {
    await (0, _utils_1.permissionMerchandise)(_id, context);
    const res = await _models_1.MerchandiseModel.findByIdAndDelete(_id);
    if (res) {
        return {
            message: 'Delete successfully',
            success: true,
        };
    }
};
exports.deleteMerchandise = deleteMerchandise;
//# sourceMappingURL=deleteMerchandise.js.map