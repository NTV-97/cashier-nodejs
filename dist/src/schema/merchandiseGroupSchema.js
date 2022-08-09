"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchandiseGroupSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.merchandiseGroupSchema = (0, apollo_server_express_1.gql) `
  type MerchandiseGroup {
    id: ID!
    merchandiseGroupCode: String!
    merchandiseGroupName: String!
    description: String
  }
  type Success {
    message: String!
    success: Boolean!
  }

  extend type Query {
    getMerchandiseGroup: [MerchandiseGroup]
  }
  extend type Mutation {
    createMerchandiseGroup(
      merchandiseGroupCode: String!
      merchandiseGroupName: String!
      description: String
    ): Success!
    editMerchandiseGroup(
      id: String!
      merchandiseGroupCode: String
      merchandiseGroupName: String
      description: String
    ): MerchandiseGroup
    deleteMerchandiseGroup(id: String!): Success!
  }
`;
//# sourceMappingURL=merchandiseGroupSchema.js.map