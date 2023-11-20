import 'dotenv/config'

export const GRPC_PORT = process.env.GRPC_PORT || '50051'
export const HTTP_PORT = process.env.HTTP_PORT || 8002
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'

export const POSTGRES_HOST = process.env.POSTGRES_HOST
export const POSTGRES_USER = process.env.POSTGRES_USER
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE
export const POSTGRES_PORT = process.env.POSTGRES_PORT
