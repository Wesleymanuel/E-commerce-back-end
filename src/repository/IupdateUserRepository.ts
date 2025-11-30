import { UserEndity } from "../endities/userEndity.js"

export interface IupdateUserRepository{
    findByEmail(email : string) : Promise<UserEndity  | null>
    updateUser(data : UserEndity) : Promise<void>
}