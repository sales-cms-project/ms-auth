import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  database: process.env.DB_DATABASE || 'ms-auth',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3308,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  name: 'default',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrationsRun: false,
  synchronize: false,
  type: 'mysql',
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: !!process.env.DB_DISPLAY_LOGGING,
};

const migrationDataSourceOptions: DataSourceOptions = Object.assign(
  {},
  dataSourceOptions,
  {
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    migrationsRun: true,
  },
);

const dataSource = new DataSource(migrationDataSourceOptions);
export default dataSource;
