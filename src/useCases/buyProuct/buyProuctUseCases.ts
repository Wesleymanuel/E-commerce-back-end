import { buyEndity } from "../../endities/buyEndity.js";
import { IbuyProductRepository } from "../../repository/IbuyProductRepository.js";
import { buyProductDTO } from "./buyProductDTO.js";
import fetch from "node-fetch";

export class buyProductUseCases{
    constructor(private ibuyProductRepository : IbuyProductRepository){}

    async handle(data : buyProductDTO){
        const userExist = await this.ibuyProductRepository.findUser(data.userEmail)

        if(!userExist){
            throw new Error("user don't exist")
        }

        await this.ibuyProductRepository.purchases(data.userEmail)

        const newBuy = new buyEndity(data)

        await this.ibuyProductRepository.confirm(newBuy)

        await fetch("http://localhost:5678/webhook-test/869ccead-2e6e-43fd-9450-f333afb2531d", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },body: JSON.stringify({
            type : "BUY",
            to: data.userEmail,
            subject: "Bem-vindo!",
            message: `<b>
            Olá ${data.userName}, uma compra foi realizada no seu cartão, 
            caso não tenha sido você, entre em contato para que possamos cancelar
            essa compra
            </b>`,
        })
        })
    }
}