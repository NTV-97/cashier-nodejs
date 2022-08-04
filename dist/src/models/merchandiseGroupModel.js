"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseGroupModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const merchandiseGroupSchema = new Schema({
    merchandiseGroupCode: {
        type: _const_1.SchemaTypes.String,
        required: true,
        unique: true,
    },
    merchandiseGroupName: {
        type: _const_1.SchemaTypes.String,
        required: true,
    },
    description: {
        type: _const_1.SchemaTypes.String,
    },
    stallCode: {
        type: _const_1.SchemaTypes.String,
        require: true,
    },
}, { timestamps: true });
exports.MerchandiseGroupModel = mongoose_1.default.model('MerchandiseGroup', merchandiseGroupSchema);
//# sourceMappingURL=merchandiseGroupModel.js.map