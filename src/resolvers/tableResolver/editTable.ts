import { ITable, TableModel } from '@models';
import { Error } from '@config';
import { permissionTable, removeEmptyObject } from '@utils';
import { Context } from '@types';

export const editTable = async (
  _: any,
  { id, tableCode, tableName, used, description }: ITable,
  context: Context,
) => {
  await permissionTable(id, context);
  const data = {
    tableCode,
    tableName,
    description,
    used,
  };
  const remove = removeEmptyObject(data);
  const response = await TableModel.findByIdAndUpdate(id, remove, { upsert: true }, (err, doc) => {
    if (err) throw new Error(`${err}`, '500');
  });
  return response;
};
