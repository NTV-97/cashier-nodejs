import { userResolvers } from './userResolver';
import { menuResolvers } from './menuResolver';
import { authResolvers } from './authResolver';
import { tableResolvers } from './tableResolver';
import { merchandiseGroupResolvers } from './merchandiseGroupResolver';
import { merchandiseResolvers } from './merchandiseResolver';
import { unitMerchandiseResolvers } from './unitMerchandiseResolver';
import _ from 'lodash';
import { GraphQLScalarType, Kind } from 'graphql';
import { UserInputError } from 'apollo-server-errors';
import { orderResolvers } from './orderResolver';
import { billResolvers } from './billResolver';
import { revenueResolvers } from './revenueResolver';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: any) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: any) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const typeMerchandiseValue = (value: string | unknown) => {
  if (value === 'merchandise') {
    return value;
  }
  if (value === 'finished') {
    return value;
  }
  if (value === 'materials') {
    return value;
  }
  throw new UserInputError("The field type must be 'merchandise' | 'finished' | 'materials'");
};

const typeUserValue = (value: string | unknown) => {
  if (value === 'admin') {
    return value;
  }
  if (value === 'manage') {
    return value;
  }
  if (value === 'staff') {
    return value;
  }
  throw new UserInputError("The field type must be 'admin' | 'manage' | 'staff'");
};

const typeUnitDiscountValue = (value: string | unknown) => {
  if (value === 'percent') {
    return value;
  }
  if (value === 'value') {
    return value;
  }
  throw new UserInputError("The field type must be 'percent' | 'value'");
};

const typeMerchandiseScalar = new GraphQLScalarType({
  name: 'TypeMerchandise',
  description: "Merchandise type: 'merchandise' | 'finished' | 'materials'",
  serialize: typeMerchandiseValue,
  parseValue: typeMerchandiseValue,
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return typeMerchandiseValue(ast.value);
    }
    throw new UserInputError("The field type must be 'merchandise' | 'finished' | 'materials'");
  },
});
const typeUserScalar = new GraphQLScalarType({
  name: 'TypeUser',
  description: "User type: 'admin' | 'manage' | 'staff'",
  serialize: typeUserValue,
  parseValue: typeUserValue,
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return typeUserValue(ast.value);
    }
    throw new UserInputError("The field type must be 'admin' | 'manage' | 'staff'");
  },
});

const typeUnitDiscountScalar = new GraphQLScalarType({
  name: 'TypeUnitDiscount',
  description: "Unit discount type: 'percent' | 'value'",
  serialize: typeUnitDiscountValue,
  parseValue: typeUnitDiscountValue,
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return typeUnitDiscountValue(ast.value);
    }
    throw new UserInputError("The field type must be 'percent' | 'value'");
  },
});

export const resolvers = _.merge(
  {},
  userResolvers,
  menuResolvers,
  authResolvers,
  tableResolvers,
  merchandiseGroupResolvers,
  merchandiseResolvers,
  unitMerchandiseResolvers,
  { Date: dateScalar },
  { TypeMerchandise: typeMerchandiseScalar },
  { TypeUser: typeUserScalar },
  { TypeUnitDiscount: typeUnitDiscountScalar },
  orderResolvers,
  billResolvers,
  revenueResolvers,
);
