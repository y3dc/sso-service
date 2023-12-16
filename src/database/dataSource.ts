import {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from 'constants/envs'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +(POSTGRES_PORT || 5432),
  username: POSTGRES_USER,
  database: POSTGRES_DATABASE,
  password: POSTGRES_PASSWORD,
  // entities: [User],
  entities: ['src/modules/*/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  // ssl: true,
})

export default AppDataSource
