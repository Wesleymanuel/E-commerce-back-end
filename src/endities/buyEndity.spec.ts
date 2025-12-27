import { describe,test, expect } from "vitest";
import { buyEndity } from "./buyEndity.js";

describe("should be able to create an buy case", () => {
    test("correct email and cpf buy property", () => {
        const sut = new buyEndity({
            userName : 'teste compra',
            userEmail : 'teste@gmail.com',
            productID: 'awswasws',
            productTitle: 'produto_teste',
            userCPF: '111.111.111-11',
            userId : 'wwwwwwww',
            discount: 1.23,
            productPrice: 22.2,
            day : new Date()
        })
        expect(sut.userCPF && sut.userEmail).toBeTruthy()
        expect(sut.discount).toBeLessThan(sut.productPrice)
        expect(sut.discount).toBeGreaterThan(0)
    })

})
describe("shouldn't be able to create a buy case",() => {

    test("incorrect buy property", () => {
        expect( () => {
            const sut = new buyEndity({
                userName : 'teste compra',
                userEmail : 'testegmail.com',
                productID: 'awswasws',
                productTitle: 'produto_teste',
                userCPF: '11111111111',
                userId : 'wwwwwwww',
                discount: 100,
                productPrice: -5,
                day : new Date()
            })}
        ).toThrow('invalid cpf format')
        expect( () => {
            const sut = new buyEndity({
                userName : 'teste compra',
                userEmail : 'testegmail.com',
                productID: 'awswasws',
                productTitle: 'produto_teste',
                userCPF: '111.111.111-11',
                userId : 'wwwwwwww',
                discount: -100,
                productPrice: -5,
                day : new Date()
            })}
        ).toThrow('invalid email format')
        expect( () => {
            const sut = new buyEndity({
                userName : 'teste compra',
                userEmail : 'teste@gmail.com',
                productID: 'awswasws',
                productTitle: 'produto_teste',
                userCPF: '111.111.111-11',
                userId : 'wwwwwwww',
                discount: 100,
                productPrice: 5,
                day : new Date()
            })}
        ).toThrow('Discount cannot be greater than product price')
    })
})