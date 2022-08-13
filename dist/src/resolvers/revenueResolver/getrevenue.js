"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRevenue = void 0;
const _config_1 = require("@config");
const _models_1 = require("@models");
const getRevenue = async (_, params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    let offset = params.offset >= 1 ? params.offset : 1;
    offset = offset - 1;
    const limit = params.limit;
    if (!!params?.startDate) {
        const bills = await _models_1.BillModel.find({
            stallCode: context.stallCode,
            paymentAt: {
                $gte: new Date(new Date(params.startDate).setHours(0, 0, 0)),
                $lt: new Date(new Date(params?.endDate || params.startDate).setHours(23, 59, 59)),
            },
        })
            .limit(limit)
            .skip(limit * offset);
        return bills;
    }
    const bills = await _models_1.BillModel.find({
        stallCode: context.stallCode,
    })
        .limit(limit)
        .skip(limit * offset);
    return bills;
};
exports.getRevenue = getRevenue;
//# sourceMappingURL=getRevenue.js.map