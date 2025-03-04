import { AssignesMembership } from "src/assignes-memberships/assignes-membership.entity";
import { TypeMember } from "src/shared/enum/global-enum";
export declare class CoWorkingSpace {
    id: number;
    name: string;
    price: number;
    days: number;
    type: TypeMember;
    assignessMemebership: AssignesMembership[];
    created_at: Date;
    updated_at: Date;
}
