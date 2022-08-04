import { IUser, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getUser = async (_: any, { id }: { id: any }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const user: IUser = await UserModel.findById(id);
  if (user.adminId != context.userId) {
    throw new Error('forbidden', '403');
  }

  return user;
};
