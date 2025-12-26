import { UserEndity } from "../endities/userEndity.js";

export interface IloginUserRepository{
    findByEmail(email : string) : Promise<UserEndity  | null>
}