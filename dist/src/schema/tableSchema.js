"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.tableSchema = (0, apollo_server_express_1.gql) `
  type Table {
    id: String!
    tableCode: String!
    tableName: String!
    description: String
    used: Boolean!
  }
  type Success {
    message: String!
    success: Boolean!
  }

  extend type Query {
    getTables: [Table]
    getTable(id: ID!): Table!
  }
  extend type Mutation {
    createTable(
      tableCode: String!
      tableName: String!
      used: Boolean!
      description: String
    ): Success!
    editTable(
      id: String!
      tableCode: String!
      tableName: String!
      used: Boolean!
      description: String
    ): Table
    deleteTable(id: String!): Success!
  }
`;
//# sourceMappingURL=tableSchema.js.map