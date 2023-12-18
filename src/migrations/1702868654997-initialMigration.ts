import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1702868654997 implements MigrationInterface {
    name = 'InitialMigration1702868654997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "publication" character varying(300) NOT NULL, "Img" character varying(500), "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "avatar" character varying(500), "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "content" character varying(280) NOT NULL, "releaseDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, "postId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
