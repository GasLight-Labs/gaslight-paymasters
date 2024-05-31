import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-viem";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition-viem";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const mnemonic: string | undefined = process.env.MNEMONIC;
const accounts = { mnemonic };

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.23",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "TTJKDGPV1AY4H52N6HECABFZ8WDUGXD5G2",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "TTJKDGPV1AY4H52N6HECABFZ8WDUGXD5G2",
      arbitrumOne: process.env.ARBISCAN_API_KEY || "CRCAJ2S1H44DDPQBCM2YBTU4SPD8IZABQD",
    },
  },
  sourcify: {
    enabled: false,
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
    },
    mainnet: {
      url: process.env.ETHEREUM_RPC,
      accounts,
    },
    polygon: {
      url: process.env.POLYGON_RPC,
      accounts,
    },
    polygonMumbai: {
      url: process.env.POLYGON_MUMBAI_RPC,
      accounts,
    },
    arbitrumOne: {
      url: process.env.ARBITRUM_ONE_RPC,
      accounts,
    },
  },
};

export default config;




