import { createUserUseCases } from '../createUser/createUserUseCases.js'
import { Request, Response } from 'express';

export class createUserUseCasesController{
    constructor ( private createUserUseCases : createUserUseCases) {}

    async execute( req : Request, res : Response ){
        const { nome, sobrenome ,email, password, cpf } = req.body;

        try{
            await this.createUserUseCases.handle({ nome, sobrenome ,email, password, cpf })

            res.status(201).json({msg : "user was create whith sucess."})
        }
        catch (error) {
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