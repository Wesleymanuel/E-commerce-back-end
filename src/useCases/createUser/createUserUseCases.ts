import { UserEndity } from "../../endities/userEndity.js";
import { IcreateUSerRepository } from "../../repository/IcreateUserRepository.js";
import { IcreateUserDTO } from "./createUserDTO.js";
import bcrypt from 'bcrypt'

const salts: number = process.env.BCRYPT_SALT | 10

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
    }
}