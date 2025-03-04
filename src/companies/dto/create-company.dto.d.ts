import { CompanyType } from "src/shared/enum/global-enum";
export declare class CreateCompanyDto {
    name: string;
    phone: string;
    city: string;
    company_type: CompanyType;
    address: string;
    whatsApp: string;
    facebook: string;
    website: string;
    instagram: string;
    linkedin: string;
    holders: CreateHolderDto[];
}
export declare class CreateHolderDto {
    name: string;
    number: string;
    whatsApp: string;
}
