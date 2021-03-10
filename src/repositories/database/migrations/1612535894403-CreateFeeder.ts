import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateFeeder1612535894403 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'feeders',
      columns: [
        {
          name: 'user_id',
          type: 'uuid',
          isPrimary: true,
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
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'contact',
          type: 'varchar',
        },
        {
          name: 'avatar',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'description',
          type: 'varchar(255)',
        },
        {
          name: 'payment',
          type: 'decimal',
        },
      ],
      foreignKeys: [
        {
          columnNames: [ 'user_id' ],
          referencedColumnNames: [ 'id' ],
          referencedTableName: 'users',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('feeders');
  }

}
