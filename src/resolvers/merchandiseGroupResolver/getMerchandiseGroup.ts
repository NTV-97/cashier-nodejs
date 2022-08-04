import { MerchandiseGroupModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getMerchandiseGroup = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  return MerchandiseGroupModel.find({
    stallCode: context.stallCode,
  });
};
