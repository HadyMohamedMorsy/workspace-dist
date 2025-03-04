"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_TYPE_ORDER_AR = exports.LIST_TYPE_ORDER_EN = void 0;
const global_enum_1 = require("../../../../enum/global-enum");
exports.LIST_TYPE_ORDER_EN = [
    { value: null, label: "All" },
    { value: global_enum_1.TypeOrder.HOLD, label: "Hold" },
    { value: global_enum_1.TypeOrder.COST, label: "Cost" },
    { value: global_enum_1.TypeOrder.FREE, label: "Free" },
    { value: global_enum_1.TypeOrder.PAID, label: "Paid" },
];
exports.LIST_TYPE_ORDER_AR = [
    { value: null, label: "All" },
    { value: global_enum_1.TypeOrder.HOLD, label: "انتظار" },
    { value: global_enum_1.TypeOrder.COST, label: "تكلفه" },
    { value: global_enum_1.TypeOrder.FREE, label: "فري" },
    { value: global_enum_1.TypeOrder.PAID, label: "مدفوع" },
];
//# sourceMappingURL=type-order.js.map