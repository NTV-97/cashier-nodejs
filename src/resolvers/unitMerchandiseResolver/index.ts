import { createUnitMerchandise } from './createUnitMerchandise';
import { deleteUnitMerchandise } from './deleteUnitMerchandise';
import { editUnitMerchandise } from './editUnitMerchandise';
import { getUnitMerchandise } from './getUnitMerchandise';

export const unitMerchandiseResolvers = {
  Query: {
    getUnitMerchandise,
  },

  Mutation: {
    createUnitMerchandise,
    deleteUnitMerchandise,
    editUnitMerchandise,
  },
};
