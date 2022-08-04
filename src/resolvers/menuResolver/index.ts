import { getMenu, getMenus } from './getMenu';
import { createMenu } from './createMenu';
import { editMenu } from './editMenu';
import { deleteMenu } from './deleteMenu';

export const menuResolvers = {
  Query: {
    getMenus,
    getMenu,
  },

  Mutation: {
    createMenu,
    editMenu,
    deleteMenu,
  },
};
