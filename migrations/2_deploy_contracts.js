require("dotenv").config({ path: '../.env' });
const HelloToken = artifacts.require("./HelloToken.sol");

module.exports = function(deployer) {
    deployer.deploy(HelloToken, process.env.TOTAL_SUPPLY);
};