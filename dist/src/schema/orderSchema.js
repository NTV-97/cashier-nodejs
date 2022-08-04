"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.orderSchema = (0, apollo_server_express_1.gql) `
  scalar Date
  scalar TypeUnitDiscount
  type OderData {
    id: ID!
    count: Float!
    price: Float!
    name: String!
    unit: String!
    totalPrice: Float!
  }
  input TableInput {
    id: ID!
    name: String!
  }
  type Order {
    id: ID!
    createdAt: Date!
    tableId: ID!
    paymentAt: Date
    price: Float!
    totalPrice: Float!
    discount: Float
    priceDiscount: Int
    unitDiscount: TypeUnitDiscount
    orderData: [OderData]
    stallCode: String!
    count: Float!
  }
  input OrderDataInput {
    id: ID!
    count: Float
    price: Float
    name: String
    unit: String
    totalPrice: Float
  }

  extend type Query {
    getOrders: [Order]!
    getOrder(id: ID!): Order!
  }
  extend type Mutation {
    createOrder(tableId: ID!, orderData: [OrderDataInput!]): Success!
    editOrder(
      id: ID!
      tableId: ID
      price: Float
      totalPrice: Float
      discount: Float
      priceDiscount: Int
      unitDiscount: TypeUnitDiscount
      orderData: [OrderDataInput]
    ): Order!
    deleteOrder(id: ID!): Success!
  }
`;
//# sourceMappingURL=orderSchema.js.map