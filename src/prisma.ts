import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client.js';
import type { PrismaClient as PrismaClientInstance } from './generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

export const prisma: PrismaClientInstance = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
  log: ['query'],
});
