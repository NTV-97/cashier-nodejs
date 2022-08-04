import { Auth } from '@services';
import { UserModel, IUser } from '@models';

export const login = async (_: any, { username, password, stallCode }: IUser) => {
  if (!stallCode || !stallCode.length) {
    return {
      message: 'stallCode required',
      token: null,
    };
  }
  if (!username || !username.length) {
    return {
      message: 'username required',
      token: null,
    };
  }
  const userPayload = { username, stallCode };
  const user: IUser = await UserModel.findOne(userPayload);

  if (!user) {
    return {
      message: `Unknown user: ${JSON.stringify(userPayload)}`,
      token: null,
    };
  }

  const correctPassword = await Auth.matchPasswords(password, user.password);
  if (!correctPassword) {
    return {
      message: 'invalid password',
      token: null,
    };
  }

  return {
    message: 'success',
    token: Auth.generateJwt({
      userId: user.id,
      username: user.username,
      stallCode: user.stallCode,
    }),
  };
};
