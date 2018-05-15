/**
 * Created by albertogiovanelli on 15/05/18.
 */
var Sample = artifacts.require("Sample.sol");

module.exports = function(deployer) {
    deployer.deploy(Sample, 1);
};