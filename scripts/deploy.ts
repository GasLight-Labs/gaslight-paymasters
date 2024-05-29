import { parseEther, formatEther } from "viem";
import hre from "hardhat";
import { deploy } from "./common";

const ENTRYPOINT = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

// V6 Paymaster= "0x75688705486405550239134aa01e80e739f3b459";
// V7 Verifying Paymaster = 0x1098Bef00c53Ab3e53329C4221F7Dd39eeC73058
// V7 Erc20 Paymaster = 0x6704c15a9ff4baf50b44f4652851f848b3bffdc4

const paramsPaymasterErc20 = {
  _token: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  _entryPoint: ENTRYPOINT,
  _tokenOracle: "0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3",
  _nativeAssetOracle: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
  _stalenessThreshold: 172800,
  _priceMarkupLimit: 1200000,
  _priceMarkup: 1050000,
  _refundPostOpCost: 13000,
  _refundPostOpCostWithGuarantor: 40000,
};

async function main() {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  const verifyingPaymaster = await deploy<"VerifyingPaymaster">("VerifyingPaymaster", [ENTRYPOINT]);
  const erc20Paymaster = await deploy<"ERC20Paymaster">("ERC20Paymaster", [
    paramsPaymasterErc20._token,
    paramsPaymasterErc20._entryPoint,
    paramsPaymasterErc20._tokenOracle,
    paramsPaymasterErc20._nativeAssetOracle,
    paramsPaymasterErc20._stalenessThreshold,
    paramsPaymasterErc20._priceMarkupLimit,
    paramsPaymasterErc20._priceMarkup,
    paramsPaymasterErc20._refundPostOpCost,
    paramsPaymasterErc20._refundPostOpCostWithGuarantor,
  ]);
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
