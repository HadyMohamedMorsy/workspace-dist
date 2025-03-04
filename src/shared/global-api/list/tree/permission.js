"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSIONS_TREE = void 0;
const global_enum_1 = require("../../../enum/global-enum");
exports.PERMISSIONS_TREE = [
    {
        resource: global_enum_1.Resource.Individual,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.StudentActivity,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Company,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.GeneralSettings,
        actions: [global_enum_1.Permission.UPDATE, global_enum_1.Permission.CREATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
            global_enum_1.Permission.UPDATE_PERMISSION,
        ],
    },
    {
        resource: global_enum_1.Resource.Rooms,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.ExpensesPlace,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.ExpensesSalaries,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Product,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Category,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Purchases,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Returns,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Task,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Order,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.GeneralOffer,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.OfferWorkingSpace,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.OfferPackages,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Deals,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Shared,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Deskarea,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.AssignesPackage,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.ReservationRoom,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Revenue,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.AssignGeneralOffer,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.AssignesMembership,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
//# sourceMappingURL=permission.js.map