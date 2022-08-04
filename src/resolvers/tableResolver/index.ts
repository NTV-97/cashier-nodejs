import { createTable } from './createTable';
import { deleteTable } from './deleteTable';
import { editTable } from './editTable';
import { getTables, getTable } from './getTable';

export const tableResolvers = {
  Query: {
    getTables,
    getTable,
  },

  Mutation: {
    createTable,
    editTable,
    deleteTable,
  },
};
