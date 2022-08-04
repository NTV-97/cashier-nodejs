import { createMerchandiseGroup } from './createMerchandiseGroup';
import { deleteMerchandiseGroup } from './deleteMerchandiseGroup';
import { editMerchandiseGroup } from './editMerchandiseGroup';
import { getMerchandiseGroup } from './getMerchandiseGroup';

export const merchandiseGroupResolvers = {
  Query: {
    getMerchandiseGroup,
  },

  Mutation: {
    createMerchandiseGroup,
    deleteMerchandiseGroup,
    editMerchandiseGroup,
  },
};
