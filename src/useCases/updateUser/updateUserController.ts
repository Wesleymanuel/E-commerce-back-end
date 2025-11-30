import { updateUserUseCases } from "./updateUserUseCases.js";
import { Request, Response } from "express";

export class updateUserUseCasesController{
    constructor( private updateUserUseCases : updateUserUseCases){}

    async executeUpdate(req : Request, res : Response){
        const {id, nome, sobrenome, email, password, cpf } = req.body;

        try{
            await this.updateUserUseCases.handleUpadate({id, nome, sobrenome, email, password, cpf })
            res.status(201).json({msg : "user updated with sucess"})
        }
        catch(error){
             res.status(400).json({msg : "user wasn't updated with sucess", error})
        }
        
    }
}