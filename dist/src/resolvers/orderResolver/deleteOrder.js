"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = void 0;
const _models_1 = require("@models");
const _utils_1 = require("@utils");
const deleteOrder = async (_, { id }, context) => {
    await (0, _utils_1.permissionOrder)(id, context);
    const res = await _models_1.OrderModel.findByIdAndDelete(id);
    if (res) {
        return {
            message: 'Delete successfully',
            success: true,
        };
    }
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=deleteOrder.js.map