"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchandiseResolvers = void 0;
const createMerchandise_1 = require("./createMerchandise");
const deleteMerchandise_1 = require("./deleteMerchandise");
const editMerchandise_1 = require("./editMerchandise");
const getMerchandise_1 = require("./getMerchandise");
exports.merchandiseResolvers = {
    Query: {
        getMerchandise: getMerchandise_1.getMerchandise,
    },
    Mutation: {
        createMerchandise: createMerchandise_1.createMerchandise,
        deleteMerchandise: deleteMerchandise_1.deleteMerchandise,
        editMerchandise: editMerchandise_1.editMerchandise,
    },
};
//# sourceMappingURL=index.js.map