import { UserEndity } from "../endities/userEndity.js";
import { prisma } from "../prismaConfig/prismaConfig.js";
import { IupdateUserRepository } from "./IupdateUserRepository.js";

export class updateUserRepository implements IupdateUserRepository{
    async findByEmail(email: string): Promise<UserEndity | null> {
        const userExist = await prisma.user.findUnique({
            where : {
                email
            }
        })

        return userExist
    }

    async updateUser(data: UserEndity): Promise<void> {
        await prisma.user.update({
            where : {
                id : data.id
            }, 
            data: {
                nome: data.nome,
                sobrenome: data.sobrenome,
                password: data.password,
            }
        })
    }
}