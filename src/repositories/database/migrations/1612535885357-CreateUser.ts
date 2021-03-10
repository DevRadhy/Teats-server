import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1612535885357 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isUnique: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'external',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('users');
  }

}
