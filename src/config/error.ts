import { ApolloError } from 'apollo-server-errors';

export class Error extends ApolloError {
  constructor(message: string, code: string) {
    super(message, code);

    Object.defineProperty(this, 'name', { value: 'error' });
  }
}

export const formatError = (error: ApolloError) => {
  if (error.extensions.code === '401') {
    return {
      code: '401',
      message: 'You must be authenticated!',
      path: error.path,
    };
  }
  if (error.extensions.code === '403') {
    return {
      code: '403',
      message: 'You can only see and edit you own data',
      path: error.path,
    };
  }
  if (error.extensions.code === '404') {
    return {
      code: '404',
      message: error.message,
      path: error.path,
    };
  }
  if (error.extensions.code === '409') {
    return {
      code: error.extensions.code,
      message: error.message,
      path: error.path,
    };
  }
  return error;
};
