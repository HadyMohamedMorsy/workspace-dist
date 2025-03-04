import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";
import { QueryFailedError } from "typeorm";
export declare class DatabaseExceptionFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
