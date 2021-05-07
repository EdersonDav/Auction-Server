import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class BidAutomatic1620340116032 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
          name: "bidautomatics",
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
                name: "product_id",
                type: "uuid"
              }
          ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("bidautomatics");
  }

}
