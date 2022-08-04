"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionMerchandiseGroup = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionMerchandiseGroup = async (merchandiseGroupId, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    const merchandiseInfo = await _models_1.MerchandiseGroupModel.findById(merchandiseGroupId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    if (merchandiseInfo.stallCode !== context.stallCode)
        throw new _config_1.Error('forbidden', '403');
    if (!merchandiseInfo._id)
        throw new _config_1.Error('This menu do not exits', '404');
    return false;
};
exports.permissionMerchandiseGroup = permissionMerchandiseGroup;
//# sourceMappingURL=permissionMerchandiseGroup.js.map