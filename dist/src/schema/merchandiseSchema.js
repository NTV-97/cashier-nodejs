"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchandiseSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.merchandiseSchema = (0, apollo_server_express_1.gql) `
  scalar TypeMerchandise
  type Merchandise {
    id: ID!
    merchandiseCode: String!
    merchandiseName: String!
    description: String
    unit: String!
    group: String!
    type: TypeMerchandise!
    price: Float
  }
  type Success {
    message: String!
    success: Boolean!
  }

  extend type Query {
    getMerchandise(filterType: TypeMerchandise): [Merchandise]
  }
  extend type Mutation {
    createMerchandise(
      merchandiseCode: String!
      merchandiseName: String!
      description: String
      group: String!
      type: TypeMerchandise!
      unit: String!
      price: Float
    ): Success!
    editMerchandise(
      id: String!
      merchandiseCode: String
      merchandiseName: String
      description: String
      unit: String
      group: String
      type: TypeMerchandise
      price: Float
    ): Merchandise
    deleteMerchandise(id: String!): Success!
  }
`;
//# sourceMappingURL=merchandiseSchema.js.map