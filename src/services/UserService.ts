import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

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
        let hasUser = await prisma.users.findUnique({
            where: { email: email }
        });

        if(hasUser){
            return new Error("E-mail já cadastrado no banco de dados, verifique!");
        }

        const hashPwd = await bcrypt.hash(password, 15);
        return await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashPwd,
                level: 3
            }
        });
    }
}