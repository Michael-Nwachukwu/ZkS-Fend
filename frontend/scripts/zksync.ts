import Web3 from "web3";
import { ZKsyncPlugin } from "web3-plugin-zksync";

async function initializeZKsync(): Promise<any> {
  const web3 = new Web3(/* optional L1 provider */);
  web3.registerPlugin(new ZKsyncPlugin("https://sepolia.era.zksync.dev"));
  const zksync = web3.ZKsync;
  return await zksync.ContractsAddresses;
}

export default initializeZKsync;
