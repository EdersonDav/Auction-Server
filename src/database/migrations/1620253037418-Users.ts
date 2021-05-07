import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1620253037418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                      name: "id",
                      type: "uuid",
                      isPrimary: true
                    },
                    {
                      name: "name",
                      type: "varchar",
                    },
                    {
                      name: "password",
                      type: "varchar"
                    },
                    {
                      name: "balanceInitial",
                      type: "decimal",
                      default: 0
                    },
                    {
                      name: "balance",
                      type: "decimal",
                      default: 0
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
