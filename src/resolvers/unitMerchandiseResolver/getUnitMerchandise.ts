import { IUnitMerchandise, UnitMerchandiseModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

const compare = (a: IUnitMerchandise, b: IUnitMerchandise) => {
  if (a.unitName < b.unitName) {
    return -1;
  }
  if (a.unitName > b.unitName) {
    return 1;
  }
  return 0;
};

export const getUnitMerchandise = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const unitMerchandise: IUnitMerchandise[] = await UnitMerchandiseModel.find({
    stallCode: context.stallCode,
  });
  return unitMerchandise.sort(compare);
};
