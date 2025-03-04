"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_TYPE_USER_AR = exports.LIST_TYPE_USER_EN = void 0;
const global_enum_1 = require("../../../../enum/global-enum");
exports.LIST_TYPE_USER_EN = [
    { value: null, label: "All" },
    { value: global_enum_1.TypeUser.Individual, label: "Individual" },
    { value: global_enum_1.TypeUser.Company, label: "Company" },
    { value: global_enum_1.TypeUser.StudentActivity, label: "StudentActivity" },
    { value: global_enum_1.TypeUser.User, label: "User" },
];
exports.LIST_TYPE_USER_AR = [
    { value: null, label: "الكل" },
    { value: global_enum_1.TypeUser.Individual, label: "فرد" },
    { value: global_enum_1.TypeUser.Company, label: "شركه" },
    { value: global_enum_1.TypeUser.StudentActivity, label: "نشاط الطلبه" },
    { value: global_enum_1.TypeUser.User, label: "موظف" },
];
//# sourceMappingURL=type-user.js.map