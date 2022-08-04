"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const _services_1 = require("@services");
const _models_1 = require("@models");
const login = async (_, { username, password, stallCode }) => {
    if (!stallCode || !stallCode.length) {
        return {
            message: 'stallCode required',
            token: null,
        };
    }
    if (!username || !username.length) {
        return {
            message: 'username required',
            token: null,
        };
    }
    const userPayload = { username, stallCode };
    const user = await _models_1.UserModel.findOne(userPayload);
    if (!user) {
        return {
            message: `Unknown user: ${JSON.stringify(userPayload)}`,
            token: null,
        };
    }
    const correctPassword = await _services_1.Auth.matchPasswords(password, user.password);
    if (!correctPassword) {
        return {
            message: 'invalid password',
            token: null,
        };
    }
    return {
        message: 'success',
        token: _services_1.Auth.generateJwt({
            userId: user.id,
            username: user.username,
            stallCode: user.stallCode,
        }),
    };
};
exports.login = login;
//# sourceMappingURL=login.js.map