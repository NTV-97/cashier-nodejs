"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenu = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createMenu = async (_, { name, price, unit, type }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const adminId = context.userId;
    const menu = new _models_1.MenuModel({ name, price, unit, adminId, type });
    await menu.save();
    return 'new menu successfully created';
};
exports.createMenu = createMenu;
//# sourceMappingURL=createMenu.js.map