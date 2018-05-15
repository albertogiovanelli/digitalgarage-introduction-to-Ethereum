/**
 * Created by albertogiovanelli on 15/05/18.
 */
const Sample = artifacts.require('../build/contracts/Sample.sol');

contract('Sample', async(accounts) => {

    let sample;

    beforeEach('setup contract for each test', async() => {

        sample = await Sample.new(2);

    });

    it("storageData sholud be 2", async() => {
        console.log(await sample.get());
        assert.equal(await sample.get(), 2);

    });

    it("storageData sholud be changed to 1", async() => {
        console.log(await sample.get());
        await sample.set(1);
        assert.equal(await sample.get(), 1);

    });


});