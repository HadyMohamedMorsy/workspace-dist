export declare class CreateStudentActivityDto {
    name: string;
    unviresty: string;
    college: string;
    subjects: string[] | [null];
    holders: CreateHolderDto[];
}
export declare class CreateHolderDto {
    name: string;
    number: string;
    position: string;
    whatsApp: string;
}
