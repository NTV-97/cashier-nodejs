import { IMerchandise, MerchandiseModel, OrderData } from '@models';

export const reduceOrderData = async (preOrderData: OrderData[]) => {
  let orderData: OrderData[] = [];

  for (let index = 0; index < preOrderData.length; index++) {
    const merchandise: IMerchandise = await MerchandiseModel.findOne({
      _id: preOrderData[index].id,
    });
    const isEditPrice = !!preOrderData[index].price
      ? merchandise.price !== preOrderData[index].price
      : false;
    const id = preOrderData[index].id;
    const count = preOrderData[index].count;

    const price = isEditPrice ? preOrderData[index].price : merchandise.price ?? 0;
    orderData = [
      ...orderData,
      {
        id,
        count,
        price: price,
        name: merchandise.merchandiseName,
        unit: merchandise.unit,
        totalPrice: price * count,
      },
    ];
  }

  const reduceOrderData = orderData.reduce((pre, current) => {
    return {
      id: pre.id,
      count: pre.count + current.count,
      name: pre.name,
      price: pre.price + current.price,
      unit: pre.unit,
      totalPrice: pre.totalPrice + current.totalPrice,
    };
  });
  return {
    reduceOrderData,
    orderData,
  };
};
