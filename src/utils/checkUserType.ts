import { Error } from '@config';

export const checkTypeUser = (type: 'admin' | 'staff' | 'manage') => {
  if (type === 'admin') {
    return true;
  }
  if (type === 'manage') {
    return true;
  }
  if (type === 'staff') {
    return true;
  }
  throw new Error("The field type must be 'admin' | 'manage' | 'staff", '409');
};
