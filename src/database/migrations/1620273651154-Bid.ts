import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Bid1620273651154 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
          name: "bids",
          columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true
              },
              {
                name: "user_id",
                type: "uuid"
              },
              {
                name: "price",
                type: "decimal"
              },
              {
                name: "product_id",
                type: "uuid"
              }
          ],
          foreignKeys: [
            {
              name: "FKUser",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["user_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
            },
            {
              name: "FKProduct",
              referencedTableName: "products",
              referencedColumnNames: ["id"],
              columnNames: ["product_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
            }
          ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("bids");
  }

}
