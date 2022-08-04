"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionTable = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionTable = async (tableId, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    const tableInfo = await _models_1.TableModel.findById(tableId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    if (tableInfo.stallCode !== context.stallCode)
        throw new _config_1.Error('forbidden', '403');
    if (!tableInfo.id)
        throw new _config_1.Error('This menu do not exits', '404');
    return false;
};
exports.permissionTable = permissionTable;
//# sourceMappingURL=permissionTable.js.map