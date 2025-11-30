import { UserEndity } from "../endities/userEndity.js";
import { prisma } from "../prismaConfig/prismaConfig.js";
import { IdeleteUserRepository } from "./IdeleteUserRepository.js";

export class deleteUserRepository implements IdeleteUserRepository{
    async findByEmail(email: string): Promise<UserEndity | null> {
        const userEmail = await prisma.user.findUnique({
            where : {
                email
            }
        })
        return userEmail
    }

    async deleteUser(data: UserEndity): Promise<void> {
        await prisma.user.delete({
            where : {
                id : data.id,
                nome: data.nome,
                sobrenome: data.sobrenome,
                email: data.email,
                password: data.password,
                cpf: data.cpf
            }
        })
    }
}