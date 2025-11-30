import { UserEndity } from "../endities/userEndity.js";
import { prisma } from "../prismaConfig/prismaConfig.js";
import { IcreateUSerRepository } from "./IcreateUserRepository.js";

export class createUserRepository implements IcreateUSerRepository{
    async findByEmail(email: string): Promise<UserEndity | null> {
        const userCreateRepository = await prisma.user.findUnique({
            where : {
                email
            }
        })

        return userCreateRepository
    }

    async createUser(data: UserEndity): Promise<void> {
         await prisma.user.create({
            data : {
                nome: data.nome,
                sobrenome: data.sobrenome,
                email: data.email,
                password: data.password,
                cpf: data.cpf
            }
         })
     }
}