"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionUnitMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionUnitMerchandise = async (merchandiseId, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    const unitMerchandiseInfo = await _models_1.UnitMerchandiseModel.findById(merchandiseId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    if (unitMerchandiseInfo.stallCode !== context.stallCode)
        throw new _config_1.Error('forbidden', '403');
    if (!unitMerchandiseInfo._id)
        throw new _config_1.Error('This menu do not exits', '404');
    return false;
};
exports.permissionUnitMerchandise = permissionUnitMerchandise;
//# sourceMappingURL=permissionUnitMerchandise.js.map