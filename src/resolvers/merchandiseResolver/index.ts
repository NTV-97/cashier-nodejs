import { createMerchandise } from './createMerchandise';
import { deleteMerchandise } from './deleteMerchandise';
import { editMerchandise } from './editMerchandise';
import { getMerchandise } from './getMerchandise';

export const merchandiseResolvers = {
  Query: {
    getMerchandise,
  },

  Mutation: {
    createMerchandise,
    deleteMerchandise,
    editMerchandise,
  },
};
