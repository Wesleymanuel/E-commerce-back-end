import { LoginUserUseCases } from "./loginUserUseCases.js";
import { Request, Response } from "express";
import { Jwt } from "../../features/jwt.js";

export class LoginUserController {
    constructor( private loginUserUseCases : LoginUserUseCases){}

    async loginUser(req : Request, res : Response){
        const { email, password } = req.body;

        try{
            await this.loginUserUseCases.hanleLogin({email,password})
            const token = new Jwt(200)
            const jwtToken = token.sendToken()
            res.status(200).json({msg: "user loged with sucess", jwtToken})
        }catch(error){
                console.error("LOGIN USER ERROR >>>", error);

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