import "dotenv/config";
import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const mnemonicOrPrivateKey = process.env.PRIVATE_KEY || "";
const apiKey = process.env.API_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.25",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    local: {
      url: "http://localhost:8545",
      gas: "auto",
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    victest: {
      url: "https://data-seed-prevch-1-s1.vcex.network",
      chainId: 14000,
      accounts: [mnemonicOrPrivateKey],
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s2.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [mnemonicOrPrivateKey],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/XSBjWVWF6OwMEOJoRhfShq2s4K2VYMsH",
      gasPrice: 100000000000,
      chainId: 137,
      accounts: [mnemonicOrPrivateKey],
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v6",
  },
  etherscan: {
    apiKey: apiKey,
    customChains: [
      {
        network: "victest",
        chainId: 14000,
        urls: {
          apiURL: "https://testnet-vch.vcex.network/api",
          browserURL: "https://testnet-vch.vcex.network/",
        },
      },
    ],
  },
  mocha: {
    timeout: 60000,
  },
  gasReporter: {
    currency: "USD",
    // coinmarketcap: process.env.COINMARKET_KEY,
  },
};

export default config;
