"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderResolvers = void 0;
const createOrder_1 = require("./createOrder");
const deleteOrder_1 = require("./deleteOrder");
const editOrder_1 = require("./editOrder");
const getOrder_1 = require("./getOrder");
exports.orderResolvers = {
    Query: {
        getOrders: getOrder_1.getOrders,
        getOrder: getOrder_1.getOrder,
    },
    Mutation: {
        createOrder: createOrder_1.createOrder,
        editOrder: editOrder_1.editOrder,
        deleteOrder: deleteOrder_1.deleteOrder,
    },
};
//# sourceMappingURL=index.js.map