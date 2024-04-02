import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { Address, parseEther, zeroAddress } from "viem";
import { VerifyingPaymaster$Type } from "../../artifacts/contracts/VerifyingPaymaster.sol/VerifyingPaymaster";

// const ONE_GWEI: bigint = parseEther("0.001");

const entrypoint: Address = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

const VerifyingPaymasterModule = buildModule("VerifyingPaymaster", (m) => {
  const entrypointAddress = m.getParameter("entrypoint", entrypoint);
  const verifyingPaymaster = m.contract("VerifyingPaymaster", [entrypointAddress]);

  return { verifyingPaymaster };
});

export default VerifyingPaymasterModule;
