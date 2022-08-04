import { TableModel, ITable } from '@models';
import { Context } from '@types';
import { permissionTable } from '@utils';

export const deleteTable = async (_: any, { id }: ITable, context: Context) => {
  await permissionTable(id, context);
  const res = await TableModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: 'Delete successfully',
      success: true,
    };
  }
};
