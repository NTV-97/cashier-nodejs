"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionUser = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const permissionUser = async (userId, staffId) => {
    if (!userId)
        throw new _config_1.Error('unauthorized', '401');
    const staffInfo = await _models_1.UserModel.findById(staffId);
    const userInfo = await _models_1.UserModel.findById(userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    if (!staffInfo?._id)
        throw new _config_1.Error('This user do not exits', '404');
    if (staffInfo?.adminId != userId)
        throw new _config_1.Error('forbidden', '403');
    return staffInfo;
};
exports.permissionUser = permissionUser;
//# sourceMappingURL=permissionUser.js.map