import { gql } from 'apollo-server-express';

export const tableSchema = gql`
  type Table {
    id: String!
    tableCode: String!
    tableName: String!
    description: String
    used: Boolean!
  }
  type Success {
    message: String!
    success: Boolean!
  }

  extend type Query {
    getTables: [Table]
    getTable(id: ID!): Table!
  }
  extend type Mutation {
    createTable(
      tableCode: String!
      tableName: String!
      used: Boolean!
      description: String
    ): Success!
    editTable(
      id: String!
      tableCode: String!
      tableName: String!
      used: Boolean!
      description: String
    ): Table
    deleteTable(id: String!): Success!
  }
`;
