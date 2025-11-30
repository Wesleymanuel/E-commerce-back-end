import { describe, expect, test } from "vitest";
import { UserEndity } from "./userEndity.js";
import bcrypt from 'bcrypt'

describe("endity shuld created whith this form", () => {
    test("creation", () => {
        const newUser = new UserEndity({
            nome : "teste",
            sobrenome : "junior",
            email : "testeJunior@gmail.com",
            password : "teste123445",
            cpf : "000.000.000-00"
    });


    const passwordHash = bcrypt.hashSync(newUser.password, 10)
    
    expect(passwordHash.length).toBeGreaterThan(newUser.password.length)
    expect((newUser.nome.length > 0) && (newUser.sobrenome.length > 0)).toBe(true)
    expect(newUser.email.endsWith("@gmail.com")).toBe(true)
    expect(newUser.cpf.includes("000.000.000-00")).toBe(true)
    }) 
})

