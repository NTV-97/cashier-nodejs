import { UnitMerchandiseModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getUnitMerchandise = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  return UnitMerchandiseModel.find({
    stallCode: context.stallCode,
  });
};
