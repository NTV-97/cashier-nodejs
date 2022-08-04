import { UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getUsers = async (_: any, data: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  return UserModel.find({ adminId: context.userId });
};
