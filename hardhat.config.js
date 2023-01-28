require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://eth-goerli.g.alchemy.com/v2/O6CJw1sf1A_xylTveSu8TVfSMqs2KDS_",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.17",
};
  