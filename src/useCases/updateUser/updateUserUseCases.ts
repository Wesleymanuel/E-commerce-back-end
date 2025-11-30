import { IupdateUserRepository } from "../../repository/IupdateUserRepository.js";
import { IupdateUserDTO } from "./updateUserDTO.js";

export class updateUserUseCases{
    constructor( private iupdateUserRepository : IupdateUserRepository){}

    async handleUpadate( data  : IupdateUserDTO){
        const userExist = await this.iupdateUserRepository.findByEmail(data.email)

        if(!userExist){
            throw new Error("user don't exist")
        }

        await this.iupdateUserRepository.updateUser(data)
    }
}