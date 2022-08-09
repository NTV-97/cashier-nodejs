import { gql } from 'apollo-server-express';

export const billSchema = gql`
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
  type Bill {
    id: ID!
    createdOrderAt: Date!
    tableId: ID!
    paymentAt: Date
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
    getBills: [Bill]!
    getBill(id: ID!): Bill!
  }
  extend type Mutation {
    saveBill(
      createdOrderAt: Date!
      tableId: ID!
      paymentAt: Date!
      price: Float!
      totalPrice: Float!
      discount: Float
      priceDiscount: Int
      unitDiscount: TypeUnitDiscount
      orderData: [OrderDataInput!]
      count: Float!
    ): Success!
  }
`;
