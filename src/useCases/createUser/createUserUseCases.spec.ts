import { describe, it } from "vitest";
import { UserEndity } from "../../endities/userEndity.js";
import { createUserUseCases } from "./createUserUseCases.js";
import { IcreateUSerRepository } from '../../repository/IcreateUserRepository.js'

describe("shuld be able to create a new user", () => {
    it("shuld be able to create a new user", () => {
        const newUseCasesTest = new UserEndity({
            nome : "teste",
            sobrenome : "junior",
            email : "testeJunior@gmail.com",
            password : "teste123445",
            cpf : "000.000.000-00"
        })
    })
})