import { UserEndity } from "../../endities/userEndity.js";
import { IcreateUSerRepository } from "../../repository/IcreateUserRepository.js";
import { IcreateUserDTO } from "./createUserDTO.js";

export class createUserUseCases{
    constructor ( private IcreateUserRepository : IcreateUSerRepository){}

    async handle(data : IcreateUserDTO){
        const userExist = await this.IcreateUserRepository.findByEmail(data.email)

        if(userExist){
            throw new Error("user alredy exist")
        }

        const newUser = new UserEndity(data)

        await this.IcreateUserRepository.createUser(newUser)
    }
}