import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserService = {
    all:  async () => {
        return await prisma.users.findMany({
            orderBy: {
                id: 'desc',
            }
        });
    },
    findById: async (id: number) => {
        return await prisma.users.findUnique({
            where: {
                id: id
            }
        });
    },
    findByEmail: async (email: string) => {
        return await prisma.users.findUnique({
            where: {
                email: email
            }
        });
    },
    findOne: async (email: string, password:string) => {
        return await prisma.users.findFirst({
            where: {
               AND: [
                {email: email},
                {password: password}
               ]
            }
        });
    },
    create: async (name:string, email:string, password:string) => {
        return await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: password,
                level: 3
            }
        });
    }
}