import { IMerchandise, IUser, MerchandiseModel, UserModel } from '@models';
import { Error } from '@config';
import { Types } from 'mongoose';
import { Context } from '@types';

export const permissionMerchandise = async (merchandiseId: Types.ObjectId, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  const merchandiseInfo: IMerchandise = await MerchandiseModel.findById(merchandiseId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  if (merchandiseInfo.stallCode !== context.stallCode) throw new Error('forbidden', '403');
  if (!merchandiseInfo._id) throw new Error('This menu do not exits', '404');
  return false;
};
