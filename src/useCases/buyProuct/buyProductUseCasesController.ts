import { buyProductUseCases } from "./buyProuctUseCases.js";
import { Request, Response } from 'express';

export class buyProductUseCasesController{
    constructor(private BuyProductUseCases: buyProductUseCases ){}

    async hadle(req : Request, res : Response){
        const { userName, userEmail, userId, userCPF, productID, productTitle, productPrice, discount, day } = req.body;

        try {
            await this.BuyProductUseCases.handle({ userName, userEmail, userId, userCPF, productID, productTitle, productPrice, discount, day })
            res.status(201).json({msg : "buy registred with sucesses"})
        } catch (error) {
            console.error("CREATE USER ERROR >>>", error);

            if (error instanceof Error) {
                return res.status(400).json({
                msg: error.message
                });
            }

            return res.status(500).json({
                msg: "internal server error"
            });
        }
    }
}

    