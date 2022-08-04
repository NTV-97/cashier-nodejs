"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableResolvers = void 0;
const createTable_1 = require("./createTable");
const deleteTable_1 = require("./deleteTable");
const editTable_1 = require("./editTable");
const getTable_1 = require("./getTable");
exports.tableResolvers = {
    Query: {
        getTables: getTable_1.getTables,
        getTable: getTable_1.getTable,
    },
    Mutation: {
        createTable: createTable_1.createTable,
        editTable: editTable_1.editTable,
        deleteTable: deleteTable_1.deleteTable,
    },
};
//# sourceMappingURL=index.js.map