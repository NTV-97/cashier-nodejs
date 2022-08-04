"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitMerchandiseResolvers = void 0;
const createUnitMerchandise_1 = require("./createUnitMerchandise");
const deleteUnitMerchandise_1 = require("./deleteUnitMerchandise");
const editUnitMerchandise_1 = require("./editUnitMerchandise");
const getUnitMerchandise_1 = require("./getUnitMerchandise");
exports.unitMerchandiseResolvers = {
    Query: {
        getUnitMerchandise: getUnitMerchandise_1.getUnitMerchandise,
    },
    Mutation: {
        createUnitMerchandise: createUnitMerchandise_1.createUnitMerchandise,
        deleteUnitMerchandise: deleteUnitMerchandise_1.deleteUnitMerchandise,
        editUnitMerchandise: editUnitMerchandise_1.editUnitMerchandise,
    },
};
//# sourceMappingURL=index.js.map