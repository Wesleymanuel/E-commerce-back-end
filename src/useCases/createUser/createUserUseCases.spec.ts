import { describe, expect, it, vi } from "vitest";
import { createUserUseCases } from "./createUserUseCases.js";

describe("shuld be able to create a new user", () => {
    it("shuld be able to create a new user", async () => {

        const testFunctions = {
            findByEmail :  vi.fn().mockResolvedValue(null),
            createUser : vi.fn()
        }

        const userCases = new createUserUseCases(testFunctions)
        await userCases.handle({
            nome : "teste",
            sobrenome : "junior",
            email : "testeJunior@gmail.com",
            password : "teste123445",
            cpf : "000.000.000-00"
        })
        expect(testFunctions.createUser).toHaveBeenCalled();
    })
})