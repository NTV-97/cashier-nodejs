"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceOrderData = void 0;
const _models_1 = require("@models");
const reduceOrderData = async (preOrderData) => {
    let orderData = [];
    for (let index = 0; index < preOrderData.length; index++) {
        const merchandise = await _models_1.MerchandiseModel.findOne({
            _id: preOrderData[index].id,
        });
        const isEditPrice = !!preOrderData[index].price
            ? merchandise.price !== preOrderData[index].price
            : false;
        const id = preOrderData[index].id;
        const count = preOrderData[index].count;
        const price = isEditPrice ? preOrderData[index].price : merchandise.price ?? 0;
        orderData = [
            ...orderData,
            {
                id,
                count,
                price: price,
                name: merchandise.merchandiseName,
                unit: merchandise.unit,
                totalPrice: price * count,
            },
        ];
    }
    const reduceOrderData = orderData.reduce((pre, current) => {
        return {
            id: pre.id,
            count: pre.count + current.count,
            name: pre.name,
            price: pre.price + current.price,
            unit: pre.unit,
            totalPrice: pre.totalPrice + current.totalPrice,
        };
    });
    return {
        reduceOrderData,
        orderData,
    };
};
exports.reduceOrderData = reduceOrderData;
//# sourceMappingURL=reduceOrderData.js.map