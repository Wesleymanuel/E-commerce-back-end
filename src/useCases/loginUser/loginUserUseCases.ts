import { IloginUserRepository } from "../../repository/IloginUserRepository.js";
import bcrypt from 'bcrypt'
import { loginUserDTO } from "./loginUserDTO.js";
import fetch from "node-fetch";

export class LoginUserUseCases{
    constructor( private iloginUserRepository : IloginUserRepository ) {}

    async hanleLogin(data: loginUserDTO){
        const user = await this.iloginUserRepository.findByEmail(data.email)

        if(!user){
            throw new Error("user not exist")
        }

        const passwordCompare = bcrypt.compareSync(data.password, user.password)

        if(!passwordCompare){
            throw new Error('passoword icorrect')
        }

        fetch("http://localhost:5678/webhook-test/869ccead-2e6e-43fd-9450-f333afb2531d", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                type : "LOGIN_CONFIRM",
                to: data.email,
                subject: "Bem-vindo!",
                message: `<b>
                Olá ${user.firstName}, sua conta esta sendo logada, e voce que esta tentando fazer o 
                login? caso nao, entre em contato com nosso suporte
                </b>`
            }),
        })
    }
}