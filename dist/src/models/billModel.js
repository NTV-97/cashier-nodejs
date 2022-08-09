"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const billSchema = new Schema({
    tableId: {
        type: _const_1.SchemaTypes.ObjectId,
        require: true,
    },
    paymentAt: {
        type: _const_1.SchemaTypes.Date,
        require: true,
    },
    createdOrderAt: {
        type: _const_1.SchemaTypes.Date,
        require: true,
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
exports.BillModel = mongoose_1.default.model('Bill', billSchema);
//# sourceMappingURL=billModel.js.map