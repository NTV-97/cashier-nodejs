import { ITable, IUser, TableModel, UserModel } from '@models';
import { Error } from '@config';
import { Types } from 'mongoose';
import { Context } from '@types';

export const permissionTable = async (tableId: Types.ObjectId, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  const tableInfo: ITable = await TableModel.findById(tableId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  if (tableInfo.stallCode !== context.stallCode) throw new Error('forbidden', '403');
  if (!tableInfo.id) throw new Error('This menu do not exits', '404');
  return false;
};
