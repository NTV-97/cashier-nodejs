"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getUser = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const user = await _models_1.UserModel.findById(id);
    if (user.adminId != context.userId) {
        throw new _config_1.Error('forbidden', '403');
    }
    return user;
};
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map