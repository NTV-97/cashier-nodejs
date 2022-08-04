import { IUser, UserModel } from '@models';
import { Auth } from '@services';
export const signup = async (_: any, { email, username, password, stallCode }: IUser) => {
  const hashedPwd = await Auth.hashPassword(password);
  const user = new UserModel({ email, username, password: hashedPwd, type: 'admin', stallCode });
  await user.save();
  return {
    message: `${username} successfully created`,
    success: true,
  };
};
