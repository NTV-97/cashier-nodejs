"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userSchema = (0, apollo_server_express_1.gql) `
  scalar TypeUser
  type User {
    id: ID!
    password: String!
    stallCode: String!
    type: TypeUser!
    username: String!
    adminId: String
    email: String
  }
  type Login {
    message: String!
    token: String
  }
  type Success {
    message: String!
    success: Boolean!
  }
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  extend type Mutation {
    signup(
      email: String!
      username: String!
      password: String!
      type: TypeUser!
      stallCode: String!
    ): Success!
    login(username: String, password: String!, stallCode: String!): Login!
    createUser(email: String, username: String!, password: String!, type: TypeUser!): Success!
    editUser(id: String!, username: String, email: String, password: String, type: TypeUser): User!
    deleteUser(id: String!): Success!
  }
`;
//# sourceMappingURL=userSchema.js.map