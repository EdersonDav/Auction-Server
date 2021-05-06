import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Product1620253560719 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
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
                        name: "price",
                        type: "decimal"
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name:'expiredTime',
                        type:'date'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
