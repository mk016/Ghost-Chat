import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Set enableTracing to false to fix the Prisma client initialization issue
process.env.PRISMA_ENABLE_TRACING = 'false'

export default new PrismaClient()
