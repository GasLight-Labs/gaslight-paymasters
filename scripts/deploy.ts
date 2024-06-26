import { parseEther, formatEther } from "viem";
import hre from "hardhat";
import { deploy } from "./common";

const ENTRYPOINT = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";

// V6 Paymaster= "0x75688705486405550239134aa01e80e739f3b459";
// V7 Verifying Paymaster = 0x1098Bef00c53Ab3e53329C4221F7Dd39eeC73058
// V7 Erc20 Paymaster = 0x6704c15a9ff4baf50b44f4652851f848b3bffdc4
// V7 Universal Paymaster = 0xb26a9b866b95d3dda60f0e7124aafd3e01d60641
// V7 Universal Paymaster = 0xdacda34b8b3d9df839f14e87699e594329fd0a83

const paramsPaymasterErc20 = {
  _token: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  _entryPoint: ENTRYPOINT,
  _tokenOracle: "0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3",
  _nativeAssetOracle: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
  _stalenessThreshold: 172800,
  _priceMarkupLimit: 1500000,
  _priceMarkup: 1000000, // 100%
  _refundPostOpCost: 13000,
};

async function main() {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  // const verifyingPaymaster = await deploy<"VerifyingPaymaster">("VerifyingPaymaster", [ENTRYPOINT]);
  const universalPaymaster = await deploy<"UniversalPaymaster">("UniversalPaymaster", [
    paramsPaymasterErc20._token,
    paramsPaymasterErc20._entryPoint,
    paramsPaymasterErc20._tokenOracle,
    paramsPaymasterErc20._nativeAssetOracle,
    paramsPaymasterErc20._stalenessThreshold,
    paramsPaymasterErc20._priceMarkupLimit,
    paramsPaymasterErc20._priceMarkup,
    paramsPaymasterErc20._refundPostOpCost,
  ]);
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
