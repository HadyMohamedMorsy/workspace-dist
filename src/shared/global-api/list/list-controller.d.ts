import { ListService } from "./list.service";
export declare class ListController {
    private readonly listsService;
    constructor(listsService: ListService);
    getLists(keys: string[], req: any): Promise<{
        data: Record<string, any>;
    }>;
    getEntityLists(body: {
        module: string;
    }): Promise<{
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
    getPermissionsTree(): Promise<{
        data: {
            key: string;
            label: string;
            data: string;
            children: {
                key: string;
                label: string;
                data: string;
            }[];
        }[];
    }>;
    roomsCalender(): Promise<{
        data: {
            key: string;
            label: string;
            value: number;
        }[];
    }>;
}
