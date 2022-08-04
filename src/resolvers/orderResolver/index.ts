import { createOrder } from './createOrder';
import { deleteOrder } from './deleteOrder';
import { editOrder } from './editOrder';
import { getOrders, getOrder } from './getOrder';

export const orderResolvers = {
  Query: {
    getOrders,
    getOrder,
  },

  Mutation: {
    createOrder,
    editOrder,
    deleteOrder,
  },
};
