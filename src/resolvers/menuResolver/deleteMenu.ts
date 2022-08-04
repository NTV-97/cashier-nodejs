import { MenuModel } from '@models';
import { permissionMenu } from '@utils';

export const deleteMenu = async (_: any, { id }: { id: string }, context: { userId: string }) => {
  await permissionMenu(id, context.userId);
  const res = await MenuModel.findByIdAndDelete(id);
  if (res) {
    return 'Delete menu successfully';
  }
};
