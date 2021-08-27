import chai, { expect }  from 'chai'
import { FakeContract, smock } from '@defi-wonderland/smock'
import { Greeter } from '@typechained'

chai.use(smock.matchers);

describe('Greeter', ():void => {
  let greeterContract: FakeContract<Greeter>;

  beforeEach(async (): Promise<void> => {
    greeterContract = await smock.fake<Greeter>('Greeter');
  })

  it('Shoud return the message. it is once', async (): Promise<void> => {
    greeterContract.greet.returns('Hello');
    expect(await greeterContract.greet()).to.equal("Hello");
  })
})

