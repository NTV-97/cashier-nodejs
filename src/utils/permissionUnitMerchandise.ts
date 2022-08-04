import { IUnitMerchandise, IUser, UnitMerchandiseModel, UserModel } from '@models';
import { Error } from '@config';
import { Types } from 'mongoose';
import { Context } from '@types';

export const permissionUnitMerchandise = async (
  merchandiseId: Types.ObjectId,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  const unitMerchandiseInfo: IUnitMerchandise = await UnitMerchandiseModel.findById(merchandiseId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  if (unitMerchandiseInfo.stallCode !== context.stallCode) throw new Error('forbidden', '403');
  if (!unitMerchandiseInfo._id) throw new Error('This menu do not exits', '404');
  return false;
};
