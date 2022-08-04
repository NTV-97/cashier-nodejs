"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const userSchema = new Schema({
    email: {
        type: _const_1.SchemaTypes.String,
        unique: true,
    },
    username: {
        type: _const_1.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: _const_1.SchemaTypes.String,
        required: true,
    },
    type: {
        type: _const_1.SchemaTypes.String,
        required: true,
    },
    adminId: {
        type: _const_1.SchemaTypes.ObjectId,
    },
    stallCode: {
        type: _const_1.SchemaTypes.String,
        unique: true,
        require: true,
    },
}, { timestamps: true });
exports.UserModel = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=userModel.js.map