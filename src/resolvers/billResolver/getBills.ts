import { BillModel, IUser, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';
import { Types } from 'mongoose';

export const getBills = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  return await BillModel.find({ stallCode: context.stallCode });
};

export const getBill = async (_: any, { id }: { id: Types.ObjectId }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  return await BillModel.findById(id);
};
