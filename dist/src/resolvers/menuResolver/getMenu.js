"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenus = exports.getMenu = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getMenu = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    return _models_1.MenuModel.findById(id);
};
exports.getMenu = getMenu;
const getMenus = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    return _models_1.MenuModel.find({ adminId: context.userId });
};
exports.getMenus = getMenus;
//# sourceMappingURL=getMenu.js.map