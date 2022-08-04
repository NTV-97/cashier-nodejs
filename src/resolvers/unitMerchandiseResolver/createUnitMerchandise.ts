import { UnitMerchandiseModel, IUnitMerchandise, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const createUnitMerchandise = async (
  _: any,
  { unitCode, unitName, description }: IUnitMerchandise,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  const _check: IUnitMerchandise = await UnitMerchandiseModel.findOne({
    unitCode,
  });
  if (_check?.unitCode === unitCode) {
    throw new Error(`${unitCode} already used`, '409');
  }
  const merchandise = new UnitMerchandiseModel({
    unitCode: unitCode.toUpperCase(),
    unitName,
    description,
    stallCode: context.stallCode,
  });
  await merchandise.save();
  return {
    message: `${unitName} successfully created`,
    success: true,
  };
};
