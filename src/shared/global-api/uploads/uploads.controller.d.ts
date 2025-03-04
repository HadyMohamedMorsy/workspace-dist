import { UploadsService } from "./uploads.service";
export declare class UploadsController {
    private readonly fileUploadService;
    constructor(fileUploadService: UploadsService);
    uploadFile(file: Express.Multer.File): {
        name: string;
    };
}
