require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind arrow idea argue outer treat'; 
let testAccounts = [
"0xff6e2067b797677f19d81337077e595c0327c934c4d1f90f5a4fd9ac33de8f7c",
"0x9d5b43691dfc8db286c998b4fbe3f05695c1fff429969e35924b9ccdc0f7c67e",
"0x4b14af6e520e85ae2d951ae1dc7561e90c125a926c57aac7ee368846acbcc85a",
"0xefaf4cfe8e9c848550096452493af8a6d072c9ca8765848ab59a65eddbf7cd1a",
"0xce95c46879ea6d15eb6b7234598c1d353cea33e53e005a1eb0dadcef307c1a45",
"0x85a47037e3441f8158f4b4d7e3214b86266e3a904fccb5f239b16bb0cb30754e",
"0xc089c6484bfcd05fab17e83829124fee29b814855bb8d536b2651b850a6b4f72",
"0x15c7be05cb9c1e8838a48734f51918a192176325bb1e3b114c75a418c0c5f6da",
"0x79e442471be2f49c3f2c3f1285ded1fe78819c686400d16ae0ed81fa8419be35",
"0x785a790863fb81a463117560ad207954ddbf862e34bcf820c05e41c3d2483066"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

