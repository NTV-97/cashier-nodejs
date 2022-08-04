"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionOrder = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionOrder = async (tableId, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    // const tableInfo: IOrder = await OrderModel.findById(tableId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    // if (!tableInfo.id) throw new Error('This menu do not exits', '404');
    return false;
};
exports.permissionOrder = permissionOrder;
//# sourceMappingURL=permissionOrder.js.map