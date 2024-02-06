import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  primsa: PrismaClient | undefined;
};

export const prisma = globalForPrisma.primsa ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.primsa = prisma;
