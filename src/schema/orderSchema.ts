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
