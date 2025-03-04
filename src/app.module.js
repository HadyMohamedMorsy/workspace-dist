"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const assignes_general_offer_module_1 = require("./assignes-global-offers/assignes-general-offer.module");
const assignes_membership_module_1 = require("./assignes-memberships/assignes-membership.module");
const assignes_packages_module_1 = require("./assigness-packages-offers/assignes-packages.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_config_1 = require("./auth/config/jwt.config");
const access_token_guard_1 = require("./auth/guards/access-token/access-token.guard");
const authentication_guard_1 = require("./auth/guards/authentication/authentication.guard");
const category_module_1 = require("./categories/category.module");
const company_module_1 = require("./companies/company.module");
const dashbored_module_1 = require("./dahsbored/dashbored.module");
const deals_module_1 = require("./deals/deals.module");
const expense_place_module_1 = require("./expenses-place/expense-place.module");
const expense_place_child_module_1 = require("./expenses-place/expenses-place-child/expense-place-child.module");
const expense_salaries_module_1 = require("./expenses-salary/expense-salaries.module");
const generalOffer_module_1 = require("./general-offer/generalOffer.module");
const settings_module_1 = require("./general-settings/settings.module");
const individual_module_1 = require("./individual/individual.module");
const offer_co_working_space_module_1 = require("./offer-co-working-space/offer-co-working-space.module");
const offerpackages_module_1 = require("./offer-packages/offerpackages.module");
const orders_module_1 = require("./orders/orders.module");
const products_module_1 = require("./products/products.module");
const purchases_module_1 = require("./purchases/purchases.module");
const deskarea_module_1 = require("./reservations/deskarea/deskarea.module");
const reservation_room_module_1 = require("./reservations/rooms/reservation-room.module");
const shared_module_1 = require("./reservations/shared/shared.module");
const returns_module_1 = require("./returns/returns.module");
const revenue_child_module_1 = require("./revenue/revenue-child/revenue-child.module");
const revenue_module_1 = require("./revenue/revenue.module");
const rooms_module_1 = require("./rooms/rooms.module");
const app_config_1 = require("./shared/config/app.config");
const database_config_1 = require("./shared/config/database.config");
const filter_date_module_1 = require("./shared/filters/filter-date.module");
const filter_service_1 = require("./shared/filters/filter.service");
const list_module_1 = require("./shared/global-api/list/list.module");
const search_list_module_1 = require("./shared/global-api/search-list/search-list.module");
const uploads_module_1 = require("./shared/global-api/uploads/uploads.module");
const transform_response_interceptor_1 = require("./shared/interceptor/transform-response.interceptor");
const lang_middleware_1 = require("./shared/middleware/lang.middleware");
const user_middleware_1 = require("./shared/middleware/user.middleware");
const env_validation_1 = require("./shared/validations/env.validation");
const studentActivity_module_1 = require("./student-activity/studentActivity.module");
const tasks_module_1 = require("./tasks/tasks.module");
const users_module_1 = require("./users/users.module");
const vacation_module_1 = require("./vacation/vacation.module");
const ENV = process.env.NODE_ENV;
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(lang_middleware_1.LanMiddleware).forRoutes("*");
        consumer.apply(user_middleware_1.UserMiddleware).exclude("auth/login").forRoutes("*");
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            uploads_module_1.UploadsModule,
            company_module_1.CompanyModule,
            dashbored_module_1.DashboredModule,
            offerpackages_module_1.OfferPackageModule,
            rooms_module_1.RoomsModule,
            list_module_1.listModule,
            search_list_module_1.SearchModule,
            generalOffer_module_1.GeneralOfferModule,
            settings_module_1.GeneralSettingsModule,
            tasks_module_1.TaskModule,
            revenue_module_1.RevenueModule,
            revenue_child_module_1.RevenueChildModule,
            assignes_packages_module_1.AssignesPackagesModule,
            deskarea_module_1.DeskareaModule,
            reservation_room_module_1.ReservationRoomModule,
            vacation_module_1.VacationModule,
            shared_module_1.SharedModule,
            assignes_general_offer_module_1.AssignGeneralOfferModule,
            assignes_membership_module_1.AssignesMembershipModule,
            offer_co_working_space_module_1.OfferCoWorkingSpaceModule,
            deals_module_1.DealsModule,
            individual_module_1.IndividualModule,
            expense_salaries_module_1.ExpensesSalariesModule,
            expense_place_child_module_1.ExpensesPlaceChildModule,
            expense_place_module_1.ExpensesPlaceModule,
            category_module_1.CategoryModule,
            returns_module_1.ReturnsModule,
            purchases_module_1.PurchasesModule,
            products_module_1.ProductsModule,
            orders_module_1.OrdersModule,
            studentActivity_module_1.StudentActivityModule,
            filter_date_module_1.FilterDateModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "uploads"),
                serveRoot: "/uploads",
            }),
            cache_manager_1.CacheModule.register({
                ttl: 5000,
                max: 10,
                isGlobal: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: !ENV ? ".env" : `.env.${ENV}`,
                load: [app_config_1.default, database_config_1.default],
                validationSchema: env_validation_1.default,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "public"),
                serveRoot: "/public",
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: "postgres",
                    host: configService.get("database.host"),
                    port: configService.get("database.port"),
                    database: configService.get("database.name"),
                    username: configService.get("database.user"),
                    password: configService.get("database.password"),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
            }),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            filter_service_1.APIFeaturesService,
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: authentication_guard_1.AuthenticationGuard,
            },
            access_token_guard_1.AccessTokenGuard,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_response_interceptor_1.TransformInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map