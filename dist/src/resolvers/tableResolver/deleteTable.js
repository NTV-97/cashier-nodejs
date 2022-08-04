"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTable = void 0;
const _models_1 = require("@models");
const _utils_1 = require("@utils");
const deleteTable = async (_, { id }, context) => {
    await (0, _utils_1.permissionTable)(id, context);
    const res = await _models_1.TableModel.findByIdAndDelete(id);
    if (res) {
        return {
            message: 'Delete successfully',
            success: true,
        };
    }
};
exports.deleteTable = deleteTable;
//# sourceMappingURL=deleteTable.js.map