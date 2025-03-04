import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserService } from "src/users/user.service";
export declare class VacationMiddleware implements NestMiddleware {
    private readonly usersService;
    constructor(usersService: UserService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
