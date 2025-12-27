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

    async purchases(id: string): Promise<buyEndity | null> {
        const purchase = await prisma.buy.findFirst({
            where : {
                userId: id
            }
        })

        return purchase ?? null
    }

    async confirm(data: buyEndity): Promise<void> {
        await prisma.buy.create({
            data : {
                userName : data.userId,
                userEmail: data.userEmail,
                userId : data.userId,
                userCPF : data.userCPF,
                productID: data.productID,
                productTitle: data.productTitle,
                productPrice : data.productPrice,
                discount : data.discount,
                finalValue : data.finalValue,
                day: data.day
            }
        })
    }
}