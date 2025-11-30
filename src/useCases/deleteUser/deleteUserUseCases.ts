import { IdeleteUserRepository } from "../../repository/IdeleteUserRepository.js";
import { IdeleteUserDTO } from "./deleteUserDTO.js";

export class deleteUserUseCases{
    constructor ( private ideleteUserRepository : IdeleteUserRepository) {}

    async handleDelete(data : IdeleteUserDTO){
        const userExist = await this.ideleteUserRepository.findByEmail(data.email)
            if(!userExist){
                throw new Error("user don't exist")
            }

        await this.ideleteUserRepository.deleteUser(data)
    }
}