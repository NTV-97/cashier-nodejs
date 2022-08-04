import { MerchandiseGroupModel, IMerchandiseGroup, UserModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const createMerchandiseGroup = async (
  _: any,
  { merchandiseGroupCode, merchandiseGroupName, description }: IMerchandiseGroup,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  const _check: IMerchandiseGroup = await MerchandiseGroupModel.findOne({
    merchandiseGroupCode,
  });
  if (_check?.merchandiseGroupCode === merchandiseGroupCode) {
    throw new Error(`${merchandiseGroupCode} already used`, '409');
  }
  const merchandise = new MerchandiseGroupModel({
    merchandiseGroupCode: merchandiseGroupCode.toUpperCase(),
    merchandiseGroupName,
    description,
    stallCode: context.stallCode,
  });
  await merchandise.save();
  return {
    message: `${merchandiseGroupName} successfully created`,
    success: true,
  };
};
