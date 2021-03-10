import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateFood1612535903062 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'foods',
      columns: [
        {
          name: 'feeder_id',
          type: 'uuid',
        },
        {
          name: 'id',
          type: 'uuid',
          isUnique: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'category',
          type: 'decimal',
        },
        {
          name: 'price',
          type: 'varchar',
        },
      ],
      foreignKeys: [
        {
          columnNames: [ 'feeder_id' ],
          referencedColumnNames: [ 'id' ],
          referencedTableName: 'feeders',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('foods');
  }

}
