import { expect }  from 'chai'
import { FakeContract, smock } from '@defi-wonderland/smock'
import { Contract } from 'ethers'


describe("Greeter", (): void => {
  let greeterContract: FakeContract<Contract>;

  beforeEach(async (): Promise<void> => {
    greeterContract = await smock.fake<Contract>('Greeter');
  })

  it("Should return the new greeting once it's changed", async (): Promise<void> => {
    
    greeterContract.greet.returns("Hello, world!");

    expect(await greeterContract.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeterContract.setGreeting.returns("Hola, mundo!");

    // await setGreetingTx.greet.returns();

    // expect(await setGreetingTx.greet()).to.equal("Hola, mundo!");
  });
});
