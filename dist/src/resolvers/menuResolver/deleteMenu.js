"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu = void 0;
const _models_1 = require("@models");
const _utils_1 = require("@utils");
const deleteMenu = async (_, { id }, context) => {
    await (0, _utils_1.permissionMenu)(id, context.userId);
    const res = await _models_1.MenuModel.findByIdAndDelete(id);
    if (res) {
        return 'Delete menu successfully';
    }
};
exports.deleteMenu = deleteMenu;
//# sourceMappingURL=deleteMenu.js.map