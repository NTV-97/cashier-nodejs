"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const signup = async (_, { email, username, password, stallCode }) => {
    const hashedPwd = await _services_1.Auth.hashPassword(password);
    const user = new _models_1.UserModel({ email, username, password: hashedPwd, type: 'admin', stallCode });
    await user.save();
    return {
        message: `${username} successfully created`,
        success: true,
    };
};
exports.signup = signup;
//# sourceMappingURL=signup.js.map