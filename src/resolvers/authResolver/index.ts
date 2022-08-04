import { login } from './login';
import { signup } from './signup';

export const authResolvers = {
  Mutation: {
    signup,
    login,
  },
};
