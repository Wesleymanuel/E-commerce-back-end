import { describe, test, expect, vi } from 'vitest'
import { inMemoryBuyProductRepository } from '../../repository/test/in-memory-buy-product-repository.js'
import { buyProductUseCases } from './buyProuctUseCases.js'
import { UserEndity } from '../../endities/userEndity.js'
import { buyEndity } from '../../endities/buyEndity.js';

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

const pu = new buyEndity({
    userName: 'teste compra',
    userEmail: 'fernando@email.com',
    productID: 'awswasws',
    productTitle: 'produto_teste',
    userCPF: '123.456.789-00',
    userId: 'user-id',
    discount: 1.23,
    productPrice: 22.2,
    day: new Date()
})

describe('should be able to create a buy', () => {
  test('create a new buy and persist it', async () => {
    const repository = new inMemoryBuyProductRepository();
    const buyUseCases = new buyProductUseCases(repository);

    await buyUseCases.handle({
      userName: 'teste compra',
      userEmail: 'fernando@email.com',
      productID: 'awswasws',
      productTitle: 'produto_teste',
      userCPF: '123.456.789-00',
      userId: 'user-id',
      discount: 1.23,
      productPrice: 22.2,
      day: new Date()
    });

    const purchase = await repository.purchases('user-id');

    expect(purchase).not.toBeNull();
    expect(purchase?.productTitle).toBe('produto_teste');
    expect(purchase?.productPrice).toBe(22.2);
  });
});
