import { TableModel, ITable, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const createTable = async (
  _: any,
  { tableCode, tableName, used, description }: ITable,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  const _checkTable: ITable = await TableModel.findOne({ tableCode });
  if (_checkTable?.tableCode === tableCode) {
    throw new Error(`${tableCode} already used`, '409');
  }
  const table = new TableModel({
    tableCode: tableCode.toUpperCase(),
    tableName,
    used,
    description,
    stallCode: context.stallCode,
  });
  await table.save();
  return {
    message: `${tableName} successfully created`,
    success: true,
  };
};
