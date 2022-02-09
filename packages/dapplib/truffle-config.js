require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember assume hope argue front slight'; 
let testAccounts = [
"0x520f2319993e2cf563da9f8e33712a594257fcb8d5e9d59900844811102027fd",
"0x1ddf8f4a0de38384f7b90b2795dd76c8faa9af147a960b11b7c964699cbd4252",
"0x61110ffe9e09c3b2269d44e2219cd82fe980c9ead11623e87ec1d523bc848345",
"0xd0c09e75ae2771fa753f5a5a5a51e13f8450fb25ef60e577afb7ba21b5a35083",
"0xf59b9baefac9536effc5c37101ac272c3b4509a07e61b5eb5cf6315750708576",
"0x60cd4bcdd2825d4668c06bf3f0ebba48b633a692e0bc3da2a55c5fc44b6c9b2c",
"0x8862e711bdc8ff49b245d9be8c285a198e8d6da68c71acb23d9da80b9a7f49df",
"0x50e4b5ef35d8bd269669421540ea73f46932b029f70e251f7e027e95b43412b4",
"0xf4d56049b7f22bdda08f2f2f1bcbe8b4336ba36dbbb74339d60cb58da5d4052a",
"0x41cd55ab20d5480c938e30fe79f3d74ef6bf43a6ccb5bd9fa89cb1b0b7293090"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


