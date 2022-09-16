import { config } from "dotenv";

config()

export const SERVER_PORT = process.env.PORT || 3002 

export const DATABASE_PORT = process.env.DATABASE_PORT
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
export const DATABASE_HOST = process.env.DATABASE_HOST
export const DATABASE_DATABASE = process.env.DATABASE_DATABASE