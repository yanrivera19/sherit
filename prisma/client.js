import { PrismaClient } from "@prisma/client";

const client = globalThisprisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
