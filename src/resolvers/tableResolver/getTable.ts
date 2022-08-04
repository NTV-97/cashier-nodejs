import { ITable, TableModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';
import { Types } from 'mongoose';
import { permissionTable } from '@utils';

const compare = (a: ITable, b: ITable) => {
  if (a.tableName < b.tableName) {
    return -1;
  }
  if (a.tableName > b.tableName) {
    return 1;
  }
  return 0;
};

export const getTables = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const table: ITable[] = await TableModel.find({ stallCode: context.stallCode });
  return table.sort(compare);
};

export const getTable = async (_: any, { id }: { id: Types.ObjectId }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  await permissionTable(id, context);
  const table: ITable = await TableModel.findById(id);
  return table;
};
