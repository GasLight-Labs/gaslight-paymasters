import { parseEther, formatEther } from "viem";
import hre from "hardhat";
import { deploy } from "./common";

const ENTRYPOINT = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

async function main() {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  const contract = await deploy<"VerifyingPaymaster">("VerifyingPaymaster", [ENTRYPOINT]);
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });