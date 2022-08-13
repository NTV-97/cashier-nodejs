import { gql } from 'apollo-server-express';
import { billSchema } from './billSchema';

export const revenueSchema = gql`
  scalar Date
  scalar TypeUnitDiscount
  extend type Query {
    getRevenue(startDate: Date, endDate: Date, limit: Int!, offset: Int!): [Bill]!
  }
`;
