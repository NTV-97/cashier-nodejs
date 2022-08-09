"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitMerchandiseSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.unitMerchandiseSchema = (0, apollo_server_express_1.gql) `
  scalar TypeMerchandise
  type UnitMerchandise {
    id: ID!
    unitCode: String!
    unitName: String!
    description: String
  }
  type Success {
    message: String!
    success: Boolean!
  }

  extend type Query {
    getUnitMerchandise: [UnitMerchandise]
  }
  extend type Mutation {
    createUnitMerchandise(unitCode: String!, unitName: String!, description: String): Success!
    editUnitMerchandise(
      id: String!
      unitCode: String!
      unitName: String!
      description: String
    ): UnitMerchandise
    deleteUnitMerchandise(id: String!): Success!
  }
`;
//# sourceMappingURL=unitMerchandiseSchema.js.map