import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AssignesPackages } from "../assignes-packages.entity";
export declare class CheckActivePackagesMiddleware implements NestMiddleware {
    private readonly assignesPackagesRepositry;
    constructor(assignesPackagesRepositry: Repository<AssignesPackages>);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
