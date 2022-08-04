"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatError = exports.Error = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
class Error extends apollo_server_errors_1.ApolloError {
    constructor(message, code) {
        super(message, code);
        Object.defineProperty(this, 'name', { value: 'error' });
    }
}
exports.Error = Error;
const formatError = (error) => {
    if (error.extensions.code === '401') {
        return {
            code: '401',
            message: 'You must be authenticated!',
            path: error.path,
        };
    }
    if (error.extensions.code === '403') {
        return {
            code: '403',
            message: 'You can only see and edit you own data',
            path: error.path,
        };
    }
    if (error.extensions.code === '404') {
        return {
            code: '404',
            message: error.message,
            path: error.path,
        };
    }
    if (error.extensions.code === '409') {
        return {
            code: error.extensions.code,
            message: error.message,
            path: error.path,
        };
    }
    return error;
};
exports.formatError = formatError;
//# sourceMappingURL=error.js.map