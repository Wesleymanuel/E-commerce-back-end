import { buyEndity } from "../endities/buyEndity.js";
import { UserEndity } from "../endities/userEndity.js";
import { prisma } from "../prismaConfig/prismaConfig.js";
import { IbuyProductRepository } from "./IbuyProductRepository.js";

export class buyProductRepository implements IbuyProductRepository{
    async findUser(email: string): Promise<UserEndity | null> {
        const user = await prisma.user.findUnique({
            where : {
                email 
            }
        })

        return user ?? null
    }

    async purchases(email: string): Promise<buyEndity | null> {
        const purchase = await prisma.buy.findFirst({
            where : {
                userEmail: email
            }
        })

        return purchase ?? null
    }

    async confirm(data: buyEndity): Promise<void> {
        await prisma.buy.create({
            data : {
                userName : data.userName,
                userEmail: data.userEmail,
                userCPF : data.userCPF,
                userCredityCard : data.userCredityCard,
                productTitle: data.productTitle,
                productPrice : data.productPrice,
                day: data.day
            }
        })
    }
}