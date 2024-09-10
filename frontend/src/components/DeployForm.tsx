import React, { useState } from 'react';
import deployContract from '../../scripts/deployScript';
import { ContractAbi, Contract } from 'web3';

const DeployForm: React.FC = () => {
  const [abi, setAbi] = useState<string>('');
  const [bytecode, setBytecode] = useState<string>('');
  const [constructorArgs, setConstructorArgs] = useState<string>('');
  const [contract, setContract] = useState<Contract<ContractAbi> | null>(null);
  const [deploymentStatus, setDeploymentStatus] = useState<string>('');

  const handleDeploy = async (event: React.FormEvent) => {
    event.preventDefault();
    setDeploymentStatus('Deploying...');
    try {
      const parsedAbi: ContractAbi = JSON.parse(abi);
      const parsedArgs = constructorArgs ? JSON.parse(constructorArgs) : [];
      const contractFactory = await deployContract(parsedAbi, bytecode);
      const deployedContract = await contractFactory.deploy(parsedArgs);
      setContract(deployedContract);
      setDeploymentStatus('Contract deployed successfully!');
      console.log('Contract deployed:', deployedContract);
    } catch (error) {
      console.error('Error deploying contract:', error);
      setDeploymentStatus(`Error deploying contract: ${error}`);
    }
  };

  return (
    <div>
      <h2>Deploy Smart Contract</h2>
      <form onSubmit={handleDeploy}>
        <div>
          <label>ABI:</label>
          <textarea
            value={abi}
            onChange={(e) => setAbi(e.target.value)}
            rows={5}
            cols={50}
            required
          />
        </div>
        <div>
          <label>Bytecode:</label>
          <textarea
            value={bytecode}
            onChange={(e) => setBytecode(e.target.value)}
            rows={5}
            cols={50}
            required
          />
        </div>
        <div>
          <label>Constructor Arguments (JSON array):</label>
          <input
            type="text"
            value={constructorArgs}
            onChange={(e) => setConstructorArgs(e.target.value)}
          />
        </div>
        <button type="submit">Deploy</button>
      </form>
      <div>{deploymentStatus}</div>
      {contract && (
        <div>
          <h3>Contract Methods</h3>
          <pre>{JSON.stringify(contract.methods, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DeployForm;