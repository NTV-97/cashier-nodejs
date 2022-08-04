"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTable = exports.getTables = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const compare = (a, b) => {
    if (a.tableName < b.tableName) {
        return -1;
    }
    if (a.tableName > b.tableName) {
        return 1;
    }
    return 0;
};
const getTables = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const table = await _models_1.TableModel.find({ stallCode: context.stallCode });
    return table.sort(compare);
};
exports.getTables = getTables;
const getTable = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    await (0, _utils_1.permissionTable)(id, context);
    const table = await _models_1.TableModel.findById(id);
    return table;
};
exports.getTable = getTable;
//# sourceMappingURL=getTable.js.map