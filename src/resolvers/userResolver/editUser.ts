import { Context } from '@types';
import { UserModel, IUser } from '@models';
import { Auth } from '@services';
import { Error } from '@config';
import { removeEmptyObject, permissionUser, checkTypeUser } from '@utils';

export const editUser = async (
  _: any,
  { id, email, password, type, username }: IUser,
  context: Context,
) => {
  await permissionUser(context.userId, id);
  const checkUser: IUser = await UserModel.findOne({ username });
  if (checkUser?.username === username) {
    throw new Error('Username already used', '409');
  }
  if (type) checkTypeUser(type);
  const data = {
    username,
    email,
    password: password ? await Auth.hashPassword(password) : undefined,
    type,
  };
  const remove = removeEmptyObject(data);
  const response = await UserModel.findByIdAndUpdate(id, remove, { upsert: true }, (err, doc) => {
    if (err) throw new Error(`${err}`, '500');
  });

  return response;
};
