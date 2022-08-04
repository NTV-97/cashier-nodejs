"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const areaSchema = new Schema({
    areaCode: {
        type: _const_1.SchemaTypes.String,
        required: true,
        unique: true,
    },
    areaName: {
        type: _const_1.SchemaTypes.String,
        required: true,
    },
    description: {
        type: _const_1.SchemaTypes.String,
    },
    used: {
        type: _const_1.SchemaTypes.Boolean,
        require: true,
    },
    stallCode: {
        type: _const_1.SchemaTypes.Boolean,
        require: true,
    },
}, { timestamps: true });
exports.AreaModel = mongoose_1.default.model('Area', areaSchema);
//# sourceMappingURL=areaModel.js.map