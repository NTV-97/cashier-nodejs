import { getBill, getBills } from './getBills';
import { saveBill } from './saveBill';

export const billResolvers = {
  Query: {
    getBills,
    getBill,
  },

  Mutation: {
    saveBill,
  },
};
