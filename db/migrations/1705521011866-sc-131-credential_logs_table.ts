import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Sc131CreateCredentialLogsTable1705521011866
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credential_logs',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'credential_id',
            type: 'bigint',
            isNullable: false,
            unsigned: true,
          },
          {
            name: 'action',
            type: 'enum',
            isNullable: false,
            enum: ['failed_login', 'create_token', 'check_token'],
          },
          {
            name: 'user_agent',
            type: 'mediumtext',
            isNullable: false,
          },
          {
            name: 'ip_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('credential_logs', [
      new TableForeignKey({
        columnNames: ['credential_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'credentials',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('credential_logs');
  }
}
