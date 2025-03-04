export declare enum Status {
    ACTIVE = "active",
    PENDING = "pending",
    CANCELLED = "cancelled",
    REFUNDED = "refunded"
}
export declare enum AuthType {
    Bearer = 0,
    None = 1
}
export declare enum Resource {
    Individual = "customers-individual",
    StudentActivity = "customers-studentActivity",
    Company = "customers-company",
    GeneralSettings = "settings-general",
    User = "settings-user",
    Vacation = "settings-vacation",
    Revenue = "settings-revenue",
    ExpensesPlace = "settings-expenses-place",
    ExpensesSalaries = "settings-expenses-salaries",
    Rooms = "settings-Room",
    Product = "kitchen-product",
    Category = "kitchen-category",
    Purchases = "kitchen-purchases",
    Returns = "kitchen-returns",
    Order = "kitchen-orders",
    GeneralOffer = "offer-general-offer",
    OfferWorkingSpace = "offer-memeber-ship",
    OfferPackages = "offer-packages",
    Deals = "deals",
    Task = "tasks",
    Deskarea = "deskarea",
    Shared = "shared",
    ReservationRoom = "reservation-room",
    AssignGeneralOffer = "assign-general-offer",
    AssignesMembership = "assign-memeber-ship",
    AssignesPackage = "assign-package-room"
}
export declare enum CompanyType {
    GENERAL = "General",
    NGOS = "NGOs"
}
export declare enum TypeOrder {
    HOLD = "HOLD",
    COST = "COST",
    FREE = "FREE",
    PAID = "PAID"
}
export declare enum TypeUser {
    Individual = "individual",
    Company = "company",
    StudentActivity = "studentActivity",
    User = "employed"
}
export declare enum TypeSallary {
    Internal = "Internal",
    External = "External"
}
export declare enum Role {
    TECHNICAL_SUPPORT = "technical-support",
    GENERAL_MANAGER = "general-manager",
    OPERATION_MANAGER = "operation-manager",
    COMMUNITY_OFFICER = "community-officer",
    ACCOUNTANT = "accountant",
    FOUNDER = "founder",
    SALES = "sales"
}
export declare enum Permission {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete",
    VIEW = "view",
    INDEX = "index",
    UPDATE_PERMISSION = "update-permissions"
}
export declare enum TimeOfDay {
    AM = "am",
    PM = "pm"
}
export declare enum TypeMember {
    DeskaArea = "deskarea",
    Shared = "shared"
}
export declare enum ReservationStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    COMPLETE = "complete"
}
export declare enum TasksStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    COMPLETE = "complete"
}
export declare enum PRODUCT_TYPE {
    Shared = "shared",
    Deskarea = "deskarea",
    Room = "rooms",
    Membership = "membership",
    Deals = "deals",
    Packages = "packages"
}
export declare enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum DiscountType {
    PERCENTAGE = "percentage",
    AMOUNT = "amount"
}
