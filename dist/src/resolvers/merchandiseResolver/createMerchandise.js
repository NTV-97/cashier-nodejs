"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createMerchandise = async (_, { merchandiseCode, merchandiseName, description, group, type, unit, price }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    const _check = await _models_1.MerchandiseModel.findOne({
        merchandiseCode,
    });
    if (_check?.merchandiseCode === merchandiseCode) {
        throw new _config_1.Error(`${merchandiseCode} already used`, '409');
    }
    const merchandise = new _models_1.MerchandiseModel({
        merchandiseCode: merchandiseCode.toUpperCase(),
        merchandiseName,
        description,
        group,
        type,
        unit,
        price: price ? price : 0,
        stallCode: context.stallCode,
    });
    await merchandise.save();
    return {
        message: `${merchandiseName} successfully created`,
        success: true,
    };
};
exports.createMerchandise = createMerchandise;
//# sourceMappingURL=createMerchandise.js.map