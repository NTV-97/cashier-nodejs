"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.URI_MONGO) {
    console.log(`Error to get MONGO URL`);
    process.exit(1);
}
const URI_MONGO = process.env.URI_MONGO;
let database;
const configMongoose = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
const connect = () => {
    if (database) {
        return;
    }
    mongoose_1.default.connect(URI_MONGO, configMongoose).catch((err) => {
        console.log(err);
    });
    database = mongoose_1.default.connection;
    database.once('open', databaseConnect);
    database.on('error', () => {
        console.log('Error connecting to database');
    });
};
exports.connect = connect;
const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
};
exports.disconnect = disconnect;
const databaseConnect = async () => {
    try {
        console.log('Connected to database');
    }
    catch (err) {
        console.log('databaseConnect -> err', err);
    }
};
//# sourceMappingURL=mongoConnect.js.map