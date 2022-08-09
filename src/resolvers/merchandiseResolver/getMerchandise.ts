import { IMerchandise, MerchandiseModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

const compare = (a: IMerchandise, b: IMerchandise) => {
  if (a.merchandiseName < b.merchandiseName) {
    return -1;
  }
  if (a.merchandiseName > b.merchandiseName) {
    return 1;
  }
  return 0;
};

export const getMerchandise = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');

  const merchandise: IMerchandise[] = await MerchandiseModel.find({
    stallCode: context.stallCode,
  });
  return merchandise.sort(compare);
};
