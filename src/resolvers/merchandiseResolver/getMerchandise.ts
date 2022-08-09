import { IMerchandise, MerchandiseModel, TypeMerchandise } from '@models';
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

export const getMerchandise = async (
  _: any,
  params: { filterType?: TypeMerchandise },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  if (params?.filterType?.length) {
    const merchandise: IMerchandise[] = await MerchandiseModel.find({
      stallCode: context.stallCode,
      type: { $ne: params.filterType },
    });
    return merchandise.sort(compare);
  }
  const merchandise: IMerchandise[] = await MerchandiseModel.find({
    stallCode: context.stallCode,
  });
  return merchandise.sort(compare);
};
