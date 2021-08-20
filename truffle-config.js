require("dotenv").config({ path: '.env' });
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.MNEMONIC;
console.log(mnemonic)
const accountIndex = 0;

module.exports = {
    networks: {
        development: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545", accountIndex);
            },
            port: 9545
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + process.env.INFURA_PROJECT_ID, accountIndex);
            },
            network_id: 3, // Ropsten's id
            gas: 5500000 // Ropsten has a lower block limit than mainnet
        }
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: "^0.8.0"
        }
    }
};