"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionMerchandise = async (merchandiseId, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    const merchandiseInfo = await _models_1.MerchandiseModel.findById(merchandiseId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    if (merchandiseInfo.stallCode !== context.stallCode)
        throw new _config_1.Error('forbidden', '403');
    if (!merchandiseInfo._id)
        throw new _config_1.Error('This menu do not exits', '404');
    return false;
};
exports.permissionMerchandise = permissionMerchandise;
//# sourceMappingURL=permissionMerchandise.js.map