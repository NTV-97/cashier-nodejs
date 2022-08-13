"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.revenueSchema = (0, apollo_server_express_1.gql) `
  scalar Date
  scalar TypeUnitDiscount
  extend type Query {
    getRevenue(startDate: Date, endDate: Date, limit: Int!, offset: Int!): [Bill]!
  }
`;
//# sourceMappingURL=revenueSchema.js.map