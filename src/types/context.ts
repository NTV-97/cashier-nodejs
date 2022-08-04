import { Types } from 'mongoose';

export type Context = {
  userId: Types.ObjectId;
  stallCode: string;
};
