"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALES = exports.FOUNDER = exports.ACCOUNTANT = exports.COMMUNITY_OFFICER = exports.OPERATIONMANGER = exports.GENERALMANGER = exports.TECHNICALSUPPORT = void 0;
const global_enum_1 = require("../shared/enum/global-enum");
exports.TECHNICALSUPPORT = [
    {
        resource: global_enum_1.Resource.Revenue,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.GeneralSettings,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.INDEX,
            global_enum_1.Permission.UPDATE_PERMISSION,
        ],
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
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
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
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Purchases,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Returns,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.GeneralOffer,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Rooms,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.OfferWorkingSpace,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.OfferPackages,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Deals,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Task,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Deskarea,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Shared,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.ReservationRoom,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.AssignGeneralOffer,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.AssignesMembership,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.AssignesPackage,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
exports.GENERALMANGER = [
    {
        resource: global_enum_1.Resource.Revenue,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.DELETE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.INDEX,
            global_enum_1.Permission.UPDATE_PERMISSION,
        ],
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
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
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
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Purchases,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.GeneralSettings,
        actions: [global_enum_1.Permission.CREATE, global_enum_1.Permission.UPDATE, global_enum_1.Permission.INDEX],
    },
    {
        resource: global_enum_1.Resource.Returns,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.GeneralOffer,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Rooms,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.OfferWorkingSpace,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.OfferPackages,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Deals,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Task,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Deskarea,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.Shared,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.ReservationRoom,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.AssignGeneralOffer,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.AssignesMembership,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
    {
        resource: global_enum_1.Resource.AssignesPackage,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
exports.OPERATIONMANGER = [
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
exports.COMMUNITY_OFFICER = [
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
exports.ACCOUNTANT = [
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
exports.FOUNDER = [
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
exports.SALES = [
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
        resource: global_enum_1.Resource.User,
        actions: [
            global_enum_1.Permission.CREATE,
            global_enum_1.Permission.UPDATE,
            global_enum_1.Permission.VIEW,
            global_enum_1.Permission.DELETE,
            global_enum_1.Permission.INDEX,
        ],
    },
];
//# sourceMappingURL=permissions-default.js.map