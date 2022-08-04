import { UserModel, IUser } from '@models';
import { permissionUser } from '@utils';
import { Context } from '@types';

export const deleteUser = async (_: any, { id }: IUser, context: Context) => {
  await permissionUser(context.userId, id);
  const res = await UserModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: `Delete successfully`,
      success: true,
    };
  }
};
