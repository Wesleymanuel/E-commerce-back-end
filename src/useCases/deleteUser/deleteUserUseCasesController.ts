import { deleteUserUseCases } from "./deleteUserUseCases.js";
import { Request, Response } from "express";

export class deleteUserUseCasesController{
    constructor( private deleteUserUseCases : deleteUserUseCases ){}

    async executeDelete(req : Request , res : Response){
        const { id, nome, sobrenome, email, password , cpf } = req.body;

        try{
            await this.deleteUserUseCases.handleDelete({id, nome, sobrenome, email, password , cpf})
            res.status(201).json({msg : "user was deleted with sucess"})
        }catch(error){
            res.status(500).json({msg : "user wasn't deletes whith sucess, internal server error" , error})
        }



    }


}