"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMenu = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editMenu = async (_, { id, name, price, unit, type }, context) => {
    await (0, _utils_1.permissionMenu)(id ?? '', context.userId);
    const response = await _models_1.MenuModel.findByIdAndUpdate(id, {
        name,
        price,
        unit,
        type,
    }, { upsert: true }, (err, doc) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editMenu = editMenu;
//# sourceMappingURL=editMenu.js.map