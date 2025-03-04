import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AssignesMembership } from "../assignes-membership.entity";
export declare class CheckActiveMembershipMiddleware implements NestMiddleware {
    private readonly assignesMembershipRepository;
    constructor(assignesMembershipRepository: Repository<AssignesMembership>);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
