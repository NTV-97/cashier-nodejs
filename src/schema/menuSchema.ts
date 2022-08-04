import { gql } from 'apollo-server-express';

export const menuSchema = gql`
  type Menu {
    id: ID!
    name: String!
    unit: String!
    price: Int!
    adminId: String!
    type: String!
  }
  extend type Query {
    getMenu(id: ID!): Menu
    getMenus: [Menu]
  }
  extend type Mutation {
    createMenu(name: String!, unit: String!, price: Int!, type: String!): String!
    editMenu(id: String!, name: String!, price: Int!, unit: String!, type: String!): Menu
    deleteMenu(id: String!): String!
  }
`;
