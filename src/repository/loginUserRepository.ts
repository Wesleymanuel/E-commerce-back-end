import { IloginUserRepository } from "./IloginUserRepository.js";
import { prisma } from "../prismaConfig/prismaConfig.js";
import { UserEndity } from "../endities/userEndity.js";

export class loginUserRepository implements IloginUserRepository{
    async findByEmail(email: string): Promise<UserEndity | null> {
        const userExist = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return userExist
    }
}