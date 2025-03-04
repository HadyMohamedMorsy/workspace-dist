import { DeskareaService } from "./deskarea.service";
import { CreateDeskAreaDto } from "./dto/create-deskarea.dto";
import { UpdateDeskAreaDto } from "./dto/update-deskarea.dto";
export declare class DeskareaController {
    private readonly deskareaService;
    constructor(deskareaService: DeskareaService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividuaDeskareaAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyDeskareaAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentDeskareaAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserDeskareaAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDeskareaDto: CreateDeskAreaDto, req: Request): Promise<import("./deskarea.entity").Deskarea>;
    createReservationByMememberShip(createSharedAreaDto: CreateDeskAreaDto, req: Request): Promise<import("../../assignes-memberships/assignes-membership.entity").AssignesMembership>;
    findReservationIndividualAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationCompanyAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationStudentActivityAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    update(updateDeskareaDto: UpdateDeskAreaDto): Promise<import("./deskarea.entity").Deskarea>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
