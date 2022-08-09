"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMerchandise = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const compare = (a, b) => {
    if (a.merchandiseName < b.merchandiseName) {
        return -1;
    }
    if (a.merchandiseName > b.merchandiseName) {
        return 1;
    }
    return 0;
};
const getMerchandise = async (_, params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    if (params?.filterType?.length) {
        const merchandise = await _models_1.MerchandiseModel.find({
            stallCode: context.stallCode,
            type: { $ne: params.filterType },
        });
        return merchandise.sort(compare);
    }
    const merchandise = await _models_1.MerchandiseModel.find({
        stallCode: context.stallCode,
    });
    return merchandise.sort(compare);
};
exports.getMerchandise = getMerchandise;
//# sourceMappingURL=getMerchandise.js.map