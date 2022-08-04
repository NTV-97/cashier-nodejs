import { UserModel } from '@models';
import { Error } from '@config';
import { Types } from 'mongoose';

export const permissionUser = async (userId: Types.ObjectId, staffId: Types.ObjectId) => {
  if (!userId) throw new Error('unauthorized', '401');
  const staffInfo = await UserModel.findById(staffId);
  const userInfo = await UserModel.findById(userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  if (!staffInfo?._id) throw new Error('This user do not exits', '404');
  if (staffInfo?.adminId != userId) throw new Error('forbidden', '403');
  return staffInfo;
};
