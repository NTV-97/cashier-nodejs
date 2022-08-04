"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    price: {
        type: Schema.Types.Number,
        required: true,
    },
    adminId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.MenuModel = mongoose_1.default.model('Menu', menuSchema);
//# sourceMappingURL=menuModel.js.map