import { Context } from '@types';
import { UserModel, IUser } from '@models';
import { Auth } from '@services';
import { Error } from '@config';
import { checkTypeUser } from '@utils';

export const createUser = async (
  _: any,
  { password, type, username, email }: IUser,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const checkUser: IUser = await UserModel.findOne({ username });
  if (checkUser?.username === username) {
    throw new Error('Username already used', '409');
  }
  checkTypeUser(type);
  const hashedPwd = await Auth.hashPassword(password);
  const adminId = context.userId;
  const { stallCode } = context;

  const user = new UserModel({ email, username, password: hashedPwd, type, adminId, stallCode });
  await user.save();
  return {
    message: `${username} successfully created`,
    success: true,
  };
};
