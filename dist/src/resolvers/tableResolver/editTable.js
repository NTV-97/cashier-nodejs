"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTable = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editTable = async (_, { id, tableCode, tableName, used, description }, context) => {
    await (0, _utils_1.permissionTable)(id, context);
    const data = {
        tableCode,
        tableName,
        description,
        used,
    };
    const remove = (0, _utils_1.removeEmptyObject)(data);
    const response = await _models_1.TableModel.findByIdAndUpdate(id, remove, { upsert: true }, (err, doc) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editTable = editTable;
//# sourceMappingURL=editTable.js.map