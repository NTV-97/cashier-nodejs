"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBill = exports.getBills = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getBills = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    return await _models_1.BillModel.find({ stallCode: context.stallCode });
};
exports.getBills = getBills;
const getBill = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    return await _models_1.BillModel.findById(id);
};
exports.getBill = getBill;
//# sourceMappingURL=getBills.js.map