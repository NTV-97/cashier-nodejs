"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createTable = async (_, { tableCode, tableName, used, description }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    const _checkTable = await _models_1.TableModel.findOne({ tableCode });
    if (_checkTable?.tableCode === tableCode) {
        throw new _config_1.Error(`${tableCode} already used`, '409');
    }
    const table = new _models_1.TableModel({
        tableCode: tableCode.toUpperCase(),
        tableName,
        used,
        description,
        stallCode: context.stallCode,
    });
    await table.save();
    return {
        message: `${tableName} successfully created`,
        success: true,
    };
};
exports.createTable = createTable;
//# sourceMappingURL=createTable.js.map