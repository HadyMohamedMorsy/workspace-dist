import { CategoryService } from "src/categories/category.service";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { OfferCoWorkingSpaceService } from "src/offer-co-working-space/offer-co-working-space.service";
import { OfferPackagesService } from "src/offer-packages/offerpackages.service";
import { RoomsService } from "src/rooms/rooms.service";
import { UserService } from "src/users/user.service";
export declare class ListService {
    #private;
    private readonly usersService;
    private readonly roomService;
    private readonly generalOfferService;
    private readonly categoryService;
    private readonly offerPackagesService;
    private readonly offerCoWorkingSpaceService;
    constructor(usersService: UserService, roomService: RoomsService, generalOfferService: GeneralOfferService, categoryService: CategoryService, offerPackagesService: OfferPackagesService, offerCoWorkingSpaceService: OfferCoWorkingSpaceService);
    getLists(keys: string[], lang: string): Promise<Record<string, any>>;
    getEntityList(module: string): Promise<{
        data: import("../../../users/user.entity").User[];
    } | {
        data: import("../../../rooms/room.entity").Room[];
    } | {
        data: import("../../../categories/category.entity").Category[];
    } | {
        data: import("../../../general-offer/generalOffer.entity").GeneralOffer[];
    } | {
        data: import("../../../offer-co-working-space/offer-co-working-space.entity").CoWorkingSpace[];
    } | {
        data: import("../../../offer-packages/offer-package.entity").OfferPackages[];
    }>;
    filterRoomsCalender(): Promise<{
        key: string;
        label: string;
        value: number;
    }[]>;
    getPermissionTree(permissions: {
        resource: string;
        actions: string[];
    }[]): Promise<{
        key: string;
        label: string;
        data: string;
        children: {
            key: string;
            label: string;
            data: string;
        }[];
    }[]>;
}
