"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.menuSchema = (0, apollo_server_express_1.gql) `
  type Menu {
    id: ID!
    name: String!
    unit: String!
    price: Int!
    adminId: String!
    type: String!
  }
  extend type Query {
    getMenu(id: ID!): Menu
    getMenus: [Menu]
  }
  extend type Mutation {
    createMenu(name: String!, unit: String!, price: Int!, type: String!): String!
    editMenu(id: String!, name: String!, price: Int!, unit: String!, type: String!): Menu
    deleteMenu(id: String!): String!
  }
`;
//# sourceMappingURL=menuSchema.js.map