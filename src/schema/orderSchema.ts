import { gql } from 'apollo-server-express';

export const orderSchema = gql`
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
  type Order {
    id: ID!
    createdAt: Date!
    tableId: ID!
    price: Float!
    totalPrice: Float!
    discount: Float
    priceDiscount: Int
    unitDiscount: TypeUnitDiscount
    orderData: [OderData]
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
