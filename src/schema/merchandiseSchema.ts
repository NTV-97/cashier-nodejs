import { gql } from 'apollo-server-express';

export const merchandiseSchema = gql`
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
