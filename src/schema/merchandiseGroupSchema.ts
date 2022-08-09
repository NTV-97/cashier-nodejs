import { gql } from 'apollo-server-express';

export const merchandiseGroupSchema = gql`
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
