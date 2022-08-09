"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveBill = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const saveBill = async (_, { createdOrderAt, tableId, paymentAt, price, totalPrice, discount, priceDiscount, unitDiscount, orderData, count, }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    const Bill = new _models_1.BillModel({
        createdOrderAt,
        tableId,
        paymentAt,
        price,
        totalPrice,
        discount,
        priceDiscount,
        unitDiscount,
        orderData,
        count,
        stallCode: context.stallCode,
    });
    await Bill.save();
    return {
        message: `Bill successfully save`,
        success: true,
    };
};
exports.saveBill = saveBill;
//# sourceMappingURL=saveBill.js.map