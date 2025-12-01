import { describe, test, expect } from "vitest";
import { ProductEndity } from "./product.js";

describe("shuld create a correct product", () => {
    test("correct product form", () => {
        const newProduct = new ProductEndity({
            name : "Mouse",
            price : 50,
            description : "Mouse muito bom"
        })

        expect(newProduct.price).toBeGreaterThan(0)
        expect(newProduct.name.length).toBeGreaterThan(0)
        expect(newProduct.description.length).toBeGreaterThan(0)
    })
})