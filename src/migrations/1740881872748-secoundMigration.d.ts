import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SecoundMigration1740881872748 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
