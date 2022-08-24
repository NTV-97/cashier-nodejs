import { Context } from '@types';
import { Error } from '@config';
import { BillModel, IBill, IUser, UserModel } from '@models';

export const getRevenue = async (
  _: any,
  params: { startDate?: Date; endDate?: Date; limit: number; offset: number },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const userInfo: IUser = await UserModel.findById(context.userId);
  if (userInfo.type === 'staff') throw new Error('forbidden', '403');
  let offset = params.offset >= 1 ? params.offset : 1;
  offset = offset - 1;
  const limit = params.limit;
  if (!!params?.startDate) {
    const bills: IBill[] = await BillModel.find({
      stallCode: context.stallCode,
      paymentAt: {
        $gte: new Date(new Date(params.startDate).setHours(0, 0, 0)),
        $lt: new Date(new Date(params?.endDate || params.startDate).setHours(23, 59, 59)),
      },
    })
      .limit(limit)
      .skip(limit * offset);

    return bills;
  }
  const bills: IBill[] = await BillModel.find({
    stallCode: context.stallCode,
  })
    .limit(limit)
    .skip(limit * offset);
  return bills;
};
