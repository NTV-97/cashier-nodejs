import { MerchandiseModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getMerchandise = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  return MerchandiseModel.find({
    stallCode: context.stallCode,
  });
};
