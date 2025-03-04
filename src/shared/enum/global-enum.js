"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountType = exports.UserStatus = exports.PRODUCT_TYPE = exports.TasksStatus = exports.ReservationStatus = exports.TypeMember = exports.TimeOfDay = exports.Permission = exports.Role = exports.TypeSallary = exports.TypeUser = exports.TypeOrder = exports.CompanyType = exports.Resource = exports.AuthType = exports.Status = void 0;
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["PENDING"] = "pending";
    Status["CANCELLED"] = "cancelled";
    Status["REFUNDED"] = "refunded";
})(Status || (exports.Status = Status = {}));
var AuthType;
(function (AuthType) {
    AuthType[AuthType["Bearer"] = 0] = "Bearer";
    AuthType[AuthType["None"] = 1] = "None";
})(AuthType || (exports.AuthType = AuthType = {}));
var Resource;
(function (Resource) {
    Resource["Individual"] = "customers-individual";
    Resource["StudentActivity"] = "customers-studentActivity";
    Resource["Company"] = "customers-company";
    Resource["GeneralSettings"] = "settings-general";
    Resource["User"] = "settings-user";
    Resource["Vacation"] = "settings-vacation";
    Resource["Revenue"] = "settings-revenue";
    Resource["ExpensesPlace"] = "settings-expenses-place";
    Resource["ExpensesSalaries"] = "settings-expenses-salaries";
    Resource["Rooms"] = "settings-Room";
    Resource["Product"] = "kitchen-product";
    Resource["Category"] = "kitchen-category";
    Resource["Purchases"] = "kitchen-purchases";
    Resource["Returns"] = "kitchen-returns";
    Resource["Order"] = "kitchen-orders";
    Resource["GeneralOffer"] = "offer-general-offer";
    Resource["OfferWorkingSpace"] = "offer-memeber-ship";
    Resource["OfferPackages"] = "offer-packages";
    Resource["Deals"] = "deals";
    Resource["Task"] = "tasks";
    Resource["Deskarea"] = "deskarea";
    Resource["Shared"] = "shared";
    Resource["ReservationRoom"] = "reservation-room";
    Resource["AssignGeneralOffer"] = "assign-general-offer";
    Resource["AssignesMembership"] = "assign-memeber-ship";
    Resource["AssignesPackage"] = "assign-package-room";
})(Resource || (exports.Resource = Resource = {}));
var CompanyType;
(function (CompanyType) {
    CompanyType["GENERAL"] = "General";
    CompanyType["NGOS"] = "NGOs";
})(CompanyType || (exports.CompanyType = CompanyType = {}));
var TypeOrder;
(function (TypeOrder) {
    TypeOrder["HOLD"] = "HOLD";
    TypeOrder["COST"] = "COST";
    TypeOrder["FREE"] = "FREE";
    TypeOrder["PAID"] = "PAID";
})(TypeOrder || (exports.TypeOrder = TypeOrder = {}));
var TypeUser;
(function (TypeUser) {
    TypeUser["Individual"] = "individual";
    TypeUser["Company"] = "company";
    TypeUser["StudentActivity"] = "studentActivity";
    TypeUser["User"] = "employed";
})(TypeUser || (exports.TypeUser = TypeUser = {}));
var TypeSallary;
(function (TypeSallary) {
    TypeSallary["Internal"] = "Internal";
    TypeSallary["External"] = "External";
})(TypeSallary || (exports.TypeSallary = TypeSallary = {}));
var Role;
(function (Role) {
    Role["TECHNICAL_SUPPORT"] = "technical-support";
    Role["GENERAL_MANAGER"] = "general-manager";
    Role["OPERATION_MANAGER"] = "operation-manager";
    Role["COMMUNITY_OFFICER"] = "community-officer";
    Role["ACCOUNTANT"] = "accountant";
    Role["FOUNDER"] = "founder";
    Role["SALES"] = "sales";
})(Role || (exports.Role = Role = {}));
var Permission;
(function (Permission) {
    Permission["CREATE"] = "create";
    Permission["UPDATE"] = "update";
    Permission["DELETE"] = "delete";
    Permission["VIEW"] = "view";
    Permission["INDEX"] = "index";
    Permission["UPDATE_PERMISSION"] = "update-permissions";
})(Permission || (exports.Permission = Permission = {}));
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["AM"] = "am";
    TimeOfDay["PM"] = "pm";
})(TimeOfDay || (exports.TimeOfDay = TimeOfDay = {}));
var TypeMember;
(function (TypeMember) {
    TypeMember["DeskaArea"] = "deskarea";
    TypeMember["Shared"] = "shared";
})(TypeMember || (exports.TypeMember = TypeMember = {}));
var ReservationStatus;
(function (ReservationStatus) {
    ReservationStatus["ACTIVE"] = "active";
    ReservationStatus["CANCELLED"] = "cancelled";
    ReservationStatus["COMPLETE"] = "complete";
})(ReservationStatus || (exports.ReservationStatus = ReservationStatus = {}));
var TasksStatus;
(function (TasksStatus) {
    TasksStatus["ACTIVE"] = "active";
    TasksStatus["CANCELLED"] = "cancelled";
    TasksStatus["COMPLETE"] = "complete";
})(TasksStatus || (exports.TasksStatus = TasksStatus = {}));
var PRODUCT_TYPE;
(function (PRODUCT_TYPE) {
    PRODUCT_TYPE["Shared"] = "shared";
    PRODUCT_TYPE["Deskarea"] = "deskarea";
    PRODUCT_TYPE["Room"] = "rooms";
    PRODUCT_TYPE["Membership"] = "membership";
    PRODUCT_TYPE["Deals"] = "deals";
    PRODUCT_TYPE["Packages"] = "packages";
})(PRODUCT_TYPE || (exports.PRODUCT_TYPE = PRODUCT_TYPE = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType["PERCENTAGE"] = "percentage";
    DiscountType["AMOUNT"] = "amount";
})(DiscountType || (exports.DiscountType = DiscountType = {}));
//# sourceMappingURL=global-enum.js.map