"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const _const_1 = require("@const");
const tableSchema = new Schema({
    tableCode: {
        type: _const_1.SchemaTypes.String,
        required: true,
        unique: true,
    },
    tableName: {
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
        type: _const_1.SchemaTypes.String,
        require: true,
    },
}, { timestamps: true });
exports.TableModel = mongoose_1.default.model('Table', tableSchema);
//# sourceMappingURL=tableModel.js.map