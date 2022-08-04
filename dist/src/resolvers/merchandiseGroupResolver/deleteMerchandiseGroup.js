"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMerchandiseGroup = void 0;
const _models_1 = require("@models");
const _utils_1 = require("@utils");
const deleteMerchandiseGroup = async (_, { _id }, context) => {
    await (0, _utils_1.permissionMerchandiseGroup)(_id, context);
    const res = await _models_1.MerchandiseGroupModel.findByIdAndDelete(_id);
    if (res) {
        return {
            message: 'Delete successfully',
            success: true,
        };
    }
};
exports.deleteMerchandiseGroup = deleteMerchandiseGroup;
//# sourceMappingURL=deleteMerchandiseGroup.js.map