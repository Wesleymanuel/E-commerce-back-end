import { buyEndity } from "../../endities/buyEndity.js";
import { UserEndity } from "../../endities/userEndity.js";
import { IbuyProductRepository } from "../IbuyProductRepository.js";


const user = new UserEndity({
  firstName: "Fernando",
  secondName: "Silva",
  bornDate: new Date("1998-05-10"),
  adress: "Rua das Flores, 123",
  email: "fernando@email.com",
  password: "123456",
  cpf: "123.456.789-00",
  rg: "12.345.678-9",
  phoneNumber: "(11) 99999-9999",
  banckAccont: "123456-7",
  banckAgency: "0001",
  credityCard: "4111111111111111",
  cvc: "123",
  validDate: "12/28"
});

export class inMemoryBuyProductRepository implements IbuyProductRepository{

    inMemoryDataBase : buyEndity[] = []
    inMemoryUserDataBase : UserEndity[] = [user]

    async findUser(email: string): Promise<UserEndity | null> {
        const findedUser =  this.inMemoryUserDataBase.find((user) => user.email === email)

        return findedUser ?? null
    }

    async purchases(id: string): Promise<buyEndity | null> {
        const findPurches = this.inMemoryDataBase.find(purches => purches.userId == id)

        return findPurches ?? null
    }

    async confirm(purchas : buyEndity): Promise<void> {
      this.inMemoryDataBase.push(purchas)
    }

}