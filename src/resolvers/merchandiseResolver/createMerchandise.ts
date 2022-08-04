import { MerchandiseModel, IMerchandise, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const createMerchandise = async (
  _: any,
  { merchandiseCode, merchandiseName, description, group, type, unit, price }: IMerchandise,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  const _check: IMerchandise = await MerchandiseModel.findOne({
    merchandiseCode,
  });
  if (_check?.merchandiseCode === merchandiseCode) {
    throw new Error(`${merchandiseCode} already used`, '409');
  }
  const merchandise = new MerchandiseModel({
    merchandiseCode: merchandiseCode.toUpperCase(),
    merchandiseName,
    description,
    group,
    type,
    unit,
    price: price ? price : 0,
    stallCode: context.stallCode,
  });
  await merchandise.save();
  return {
    message: `${merchandiseName} successfully created`,
    success: true,
  };
};
