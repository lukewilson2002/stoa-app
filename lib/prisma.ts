import { PrismaClient } from "@prisma/client";

// This is a singleton to avoid creating multiple connections
// https://authjs.dev/getting-started/adapters/prisma#configuration

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
 
export const prisma = globalForPrisma.prisma || new PrismaClient();
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
