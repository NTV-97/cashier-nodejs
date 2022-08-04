import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
if (!process.env.URI_MONGO) {
  console.log(`Error to get MONGO URL`);
  process.exit(1);
}
const URI_MONGO: string = process.env.URI_MONGO;

let database: mongoose.Connection;
const configMongoose = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export const connect = () => {
  if (database) {
    return;
  }
  mongoose.connect(URI_MONGO, configMongoose).catch((err) => {
    console.log(err);
  });

  database = mongoose.connection;
  database.once('open', databaseConnect);
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};

const databaseConnect = async () => {
  try {
    console.log('Connected to database');
  } catch (err) {
    console.log('databaseConnect -> err', err);
  }
};
