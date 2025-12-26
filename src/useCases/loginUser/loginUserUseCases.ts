import { IloginUserRepository } from "../../repository/IloginUserRepository.js";
import bcrypt from 'bcrypt'
import { loginUserDTO } from "./loginUserDTO.js";

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
    }
}