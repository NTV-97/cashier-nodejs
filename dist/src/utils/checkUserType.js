"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypeUser = void 0;
const _config_1 = require("@config");
const checkTypeUser = (type) => {
    if (type === 'admin') {
        return true;
    }
    if (type === 'manage') {
        return true;
    }
    if (type === 'staff') {
        return true;
    }
    throw new _config_1.Error("The field type must be 'admin' | 'manage' | 'staff", '409');
};
exports.checkTypeUser = checkTypeUser;
//# sourceMappingURL=checkUserType.js.map