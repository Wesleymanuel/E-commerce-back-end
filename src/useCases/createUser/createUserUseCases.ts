import { UserEndity } from "../../endities/userEndity.js";
import { IcreateUSerRepository } from "../../repository/IcreateUserRepository.js";
import { IcreateUserDTO } from "./createUserDTO.js";
import bcrypt from 'bcrypt'
import fetch from "node-fetch";

const salts = Number(process.env.BCRYPT_SALT || 10)

export class createUserUseCases{
    constructor ( private IcreateUserRepository : IcreateUSerRepository){}

    async handle(data : IcreateUserDTO){
        const userExist = await this.IcreateUserRepository.findByEmail(data.email)

        if(userExist){
            throw new Error("user alredy exist")
        }

        const password = bcrypt.hashSync(data.password, salts)

        const newUser = new UserEndity({...data,password})

        await this.IcreateUserRepository.createUser(newUser)

        await fetch("http://localhost:5678/webhook-test/869ccead-2e6e-43fd-9450-f333afb2531d", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            type : "ACCOUNT_CREATION",
            to: data.email,
            subject: "Bem-vindo!",
            message: `<b>
            Olá ${data.firstName}, sua conta foi criada com sucesso! agora digite este codigo 
            para que voce possa seguir em nossa aplicatiovo ${Math.random() * 10000} 
            </b>`,
        }),
        });
    }
}