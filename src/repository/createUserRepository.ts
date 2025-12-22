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
                firstName : data.firstName,
                secondName : data.secondName,
                bornDate : data.bornDate,
                adress : data.adress,
                email  :data.email,
                password : data.password,
                cpf : data.cpf,
                rg : data.rg,
                phoneNumber : data.phoneNumber,
                banckAccont : data.banckAccont,
                banckAgency : data.banckAgency,
                credityCard : data. credityCard,
                cvc : data.cvc,
                validDate : data.validDate
            }
         })
     }
}