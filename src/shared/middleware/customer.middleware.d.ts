import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { CompanyService } from "src/companies/company.service";
import { IndividualService } from "src/individual/individual.service";
import { StudentActivityService } from "src/student-activity/studentActivity.service";
import { UserService } from "src/users/user.service";
export declare class CustomerMiddleware implements NestMiddleware {
    private readonly userService;
    private readonly individualService;
    private readonly companyService;
    private readonly studentActivityService;
    constructor(userService: UserService, individualService: IndividualService, companyService: CompanyService, studentActivityService: StudentActivityService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
