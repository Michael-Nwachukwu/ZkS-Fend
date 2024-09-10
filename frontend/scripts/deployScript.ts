import { Bytes, Contract, ContractAbi, Web3 } from "web3";
import {
  ContractFactory,
  types,
  Web3ZKsyncL2,
  ZKsyncPlugin,
  ZKsyncWallet,
} from "web3-plugin-zksync";

async function deployContract(abi: ContractAbi, bytecode: Bytes): Promise<ContractFactory<ContractAbi>> {
  // Check if MetaMask is installed
  if (typeof window.ethereum === 'undefined') {
    throw new Error('MetaMask is not installed');
  }

  // Request account access if needed
  await window.ethereum.request({ method: 'eth_requestAccounts' });

  // Create a Web3 instance using MetaMask's provider
  const web3 = new Web3(window.ethereum);

  web3.registerPlugin(new ZKsyncPlugin(
    Web3ZKsyncL2.initWithDefaultProvider(types.Network.Sepolia),
  ));
  const zksync: ZKsyncPlugin = web3.ZKsync;

  // Get the user's account
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  // Create a wallet instance using the user's account
  const wallet = new zksync.Wallet(account);

  // Create a ContractFactory
  const contractFactory: ContractFactory<ContractAbi> = new ContractFactory(abi, bytecode, wallet);

  return contractFactory;
}

export default deployContract;