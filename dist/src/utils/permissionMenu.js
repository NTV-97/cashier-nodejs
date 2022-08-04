"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionMenu = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionMenu = async (menuId, userId) => {
    if (!userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(userId);
    const menuInfo = await _models_1.MenuModel.findById(menuId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    if (!menuInfo?._id)
        throw new _config_1.Error('This menu do not exits', '404');
    if (menuInfo?.adminId != userId)
        throw new _config_1.Error('forbidden', '403');
    return false;
};
exports.permissionMenu = permissionMenu;
//# sourceMappingURL=permissionMenu.js.map