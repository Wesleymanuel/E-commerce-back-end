import { UserEndity } from "../endities/userEndity.js";

export interface IcreateUSerRepository{
    findByEmail(email : string) : Promise<UserEndity  | null>
    createUser(data : UserEndity ) : Promise<void>
}