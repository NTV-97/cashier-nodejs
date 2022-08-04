"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUnitMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createUnitMerchandise = async (_, { unitCode, unitName, description }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    const _check = await _models_1.UnitMerchandiseModel.findOne({
        unitCode,
    });
    if (_check?.unitCode === unitCode) {
        throw new _config_1.Error(`${unitCode} already used`, '409');
    }
    const merchandise = new _models_1.UnitMerchandiseModel({
        unitCode: unitCode.toUpperCase(),
        unitName,
        description,
        stallCode: context.stallCode,
    });
    await merchandise.save();
    return {
        message: `${unitName} successfully created`,
        success: true,
    };
};
exports.createUnitMerchandise = createUnitMerchandise;
//# sourceMappingURL=createUnitMerchandise.js.map