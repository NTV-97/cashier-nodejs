"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getUsers = async (_, data, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    return _models_1.UserModel.find({ adminId: context.userId });
};
exports.getUsers = getUsers;
//# sourceMappingURL=getUsers.js.map