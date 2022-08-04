"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMerchandiseGroup = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createMerchandiseGroup = async (_, { merchandiseGroupCode, merchandiseGroupName, description }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    const _check = await _models_1.MerchandiseGroupModel.findOne({
        merchandiseGroupCode,
    });
    if (_check?.merchandiseGroupCode === merchandiseGroupCode) {
        throw new _config_1.Error(`${merchandiseGroupCode} already used`, '409');
    }
    const merchandise = new _models_1.MerchandiseGroupModel({
        merchandiseGroupCode: merchandiseGroupCode.toUpperCase(),
        merchandiseGroupName,
        description,
        stallCode: context.stallCode,
    });
    await merchandise.save();
    return {
        message: `${merchandiseGroupName} successfully created`,
        success: true,
    };
};
exports.createMerchandiseGroup = createMerchandiseGroup;
//# sourceMappingURL=createMerchandiseGroup.js.map