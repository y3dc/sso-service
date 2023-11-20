import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1699453038324 implements MigrationInterface {
    name = 'CreateUserTable1699453038324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "USERS" (
                "id" SERIAL NOT NULL,
                "username" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "PK_b16c39a00c89083529c6166fa5b" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "USERS"
        `);
    }

}
