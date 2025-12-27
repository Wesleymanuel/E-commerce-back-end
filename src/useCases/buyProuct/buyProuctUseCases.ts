import { buyEndity } from "../../endities/buyEndity.js";
import { IbuyProductRepository } from "../../repository/IbuyProductRepository.js";
import { buyProductDTO } from "./buyProductDTO.js";

export class buyProductUseCases{
    constructor(private ibuyProductRepository : IbuyProductRepository){}

    async handle(data : buyProductDTO){
        const userExist = await this.ibuyProductRepository.findUser(data.userEmail)

        if(!userExist){
            throw new Error("user don't exist")
        }

        await this.ibuyProductRepository.purchases(data.userId)

        const newBuy = new buyEndity(data)

        await this.ibuyProductRepository.confirm(newBuy)
    }
}