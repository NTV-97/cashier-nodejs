import { gql } from 'apollo-server-express';
import { userSchema } from './userSchema';
import { menuSchema } from './menuSchema';
import { tableSchema } from './tableSchema';
import { orderSchema } from './orderSchema';
import { merchandiseGroupSchema } from './merchandiseGroupSchema';
import { merchandiseSchema } from './merchandiseSchema';
import { unitMerchandiseSchema } from './unitMerchandiseSchema';
import { billSchema } from './billSchema';

const baseSchema = gql`
  type Query
  type Mutation
`;

export const typeDefs = [
  baseSchema,
  userSchema,
  menuSchema,
  tableSchema,
  merchandiseGroupSchema,
  merchandiseSchema,
  unitMerchandiseSchema,
  orderSchema,
  billSchema,
];
