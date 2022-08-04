"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const merchandiseSchema = new Schema({
    merchandiseCode: {
        type: _const_1.SchemaTypes.String,
        required: true,
        unique: true,
    },
    merchandiseName: {
        type: _const_1.SchemaTypes.String,
        required: true,
    },
    description: {
        type: _const_1.SchemaTypes.String,
    },
    unit: {
        type: _const_1.SchemaTypes.String,
        require: true,
    },
    group: {
        type: _const_1.SchemaTypes.String,
        require: true,
    },
    type: {
        type: _const_1.SchemaTypes.String,
        require: true,
    },
    price: {
        type: _const_1.SchemaTypes.Number,
    },
    stallCode: {
        type: _const_1.SchemaTypes.String,
        require: true,
    },
}, { timestamps: true });
exports.MerchandiseModel = mongoose_1.default.model('Merchandise', merchandiseSchema);
//# sourceMappingURL=merchandiseModel.js.map