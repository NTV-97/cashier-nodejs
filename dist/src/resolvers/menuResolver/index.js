"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuResolvers = void 0;
const getMenu_1 = require("./getMenu");
const createMenu_1 = require("./createMenu");
const editMenu_1 = require("./editMenu");
const deleteMenu_1 = require("./deleteMenu");
exports.menuResolvers = {
    Query: {
        getMenus: getMenu_1.getMenus,
        getMenu: getMenu_1.getMenu,
    },
    Mutation: {
        createMenu: createMenu_1.createMenu,
        editMenu: editMenu_1.editMenu,
        deleteMenu: deleteMenu_1.deleteMenu,
    },
};
//# sourceMappingURL=index.js.map