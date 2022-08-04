"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const createUser = async (_, { password, type, username, email }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const checkUser = await _models_1.UserModel.findOne({ username });
    if (checkUser?.username === username) {
        throw new _config_1.Error('Username already used', '409');
    }
    (0, _utils_1.checkTypeUser)(type);
    const hashedPwd = await _services_1.Auth.hashPassword(password);
    const adminId = context.userId;
    const { stallCode } = context;
    const user = new _models_1.UserModel({ email, username, password: hashedPwd, type, adminId, stallCode });
    await user.save();
    return {
        message: `${username} successfully created`,
        success: true,
    };
};
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map