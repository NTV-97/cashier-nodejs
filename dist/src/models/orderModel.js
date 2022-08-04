"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const orderSchema = new Schema({
    tableId: {
        type: _const_1.SchemaTypes.ObjectId,
        require: true,
    },
    paymentAt: {
        type: _const_1.SchemaTypes.Date,
    },
    price: {
        type: _const_1.SchemaTypes.Number,
        require: true,
    },
    totalPrice: {
        type: _const_1.SchemaTypes.Number,
        require: true,
    },
    discount: {
        type: _const_1.SchemaTypes.Number,
    },
    priceDiscount: {
        type: _const_1.SchemaTypes.Number,
    },
    unitDiscount: {
        type: _const_1.SchemaTypes.String,
    },
    orderData: {
        type: _const_1.SchemaTypes.Array,
        require: true,
    },
    stallCode: {
        type: _const_1.SchemaTypes.String,
        require: true,
    },
    count: {
        type: _const_1.SchemaTypes.Number,
        require: true,
    },
}, { timestamps: true });
exports.OrderModel = mongoose_1.default.model('Order', orderSchema);
//# sourceMappingURL=orderModel.js.map