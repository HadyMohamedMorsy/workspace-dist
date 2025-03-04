import { ValidationOptions } from "class-validator";
export declare function IsMaxDiscount(typeDiscountProperty: string, maxValue: number, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
