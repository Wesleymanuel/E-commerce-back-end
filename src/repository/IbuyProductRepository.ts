import { buyEndity } from "../endities/buyEndity.js";
import { UserEndity } from "../endities/userEndity.js";

export interface IbuyProductRepository{
    findUser(email: string) : Promise<UserEndity | null>
    purchases(id: string) : Promise<buyEndity | null>
    confirm(data: buyEndity) : Promise<void>
}