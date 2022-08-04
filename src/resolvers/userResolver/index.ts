import { createUser } from './createUser';
import { deleteUser } from './deleteUser';
import { editUser } from './editUser';
import { getUser } from './getUser';
import { getUsers } from './getUsers';

export const userResolvers = {
  Query: {
    getUsers,
    getUser,
  },

  Mutation: {
    createUser,
    editUser,
    deleteUser,
  },
};
