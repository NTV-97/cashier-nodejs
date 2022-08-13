"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const userSchema_1 = require("./userSchema");
const menuSchema_1 = require("./menuSchema");
const tableSchema_1 = require("./tableSchema");
const orderSchema_1 = require("./orderSchema");
const merchandiseGroupSchema_1 = require("./merchandiseGroupSchema");
const merchandiseSchema_1 = require("./merchandiseSchema");
const unitMerchandiseSchema_1 = require("./unitMerchandiseSchema");
const billSchema_1 = require("./billSchema");
const revenueSchema_1 = require("./revenueSchema");
const baseSchema = (0, apollo_server_express_1.gql) `
  type Query
  type Mutation
`;
exports.typeDefs = [
    baseSchema,
    userSchema_1.userSchema,
    menuSchema_1.menuSchema,
    tableSchema_1.tableSchema,
    merchandiseGroupSchema_1.merchandiseGroupSchema,
    merchandiseSchema_1.merchandiseSchema,
    unitMerchandiseSchema_1.unitMerchandiseSchema,
    orderSchema_1.orderSchema,
    billSchema_1.billSchema,
    revenueSchema_1.revenueSchema,
];
//# sourceMappingURL=index.js.map