"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyObject = void 0;
const removeEmptyObject = (object) => {
    const newObj = {};
    Object.keys(object).forEach((key) => {
        //@ts-ignore
        if (object[key] === Object(object[key]))
            newObj[key] = (0, exports.removeEmptyObject)(object[key]);
        //@ts-ignore
        else if (object[key] !== undefined)
            newObj[key] = object[key];
    });
    return newObj;
};
exports.removeEmptyObject = removeEmptyObject;
//# sourceMappingURL=removeEmptyObject.js.map