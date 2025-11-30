import { UserEndity } from "../endities/userEndity.js";


export interface IdeleteUserRepository{
    findByEmail(email : string) : Promise<UserEndity  | null>
    deleteUser(data : UserEndity) : Promise<void>
}