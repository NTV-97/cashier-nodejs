import { gql } from 'apollo-server-express';

export const unitMerchandiseSchema = gql`
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
