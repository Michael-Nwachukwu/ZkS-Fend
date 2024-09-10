# zkSync Token Transfer Dashboard

This project is a front-end web application that demonstrates basic interactions with the zkSync network using the ChainSafe Web3-Plugin-zkSync. It allows users to deploy a simple smart contract, transfer tokens from a faucet to the contract address, and view real-time transaction history.

## Table of Contents

- [zkSync Token Transfer Dashboard](#zksync-token-transfer-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
    - [Key Highlights:](#key-highlights)
  - [Features](#features)
    - [Smart Contract Deployment](#smart-contract-deployment)
    - [Token Transfer from Faucet](#token-transfer-from-faucet)
    - [Real-Time Transaction History Dashboard](#real-time-transaction-history-dashboard)
    - [Automated Faucet Integration](#automated-faucet-integration)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Setup and Running Locally](#setup-and-running-locally)
  - [Usage](#usage)
  - [Error Handling](#error-handling)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

This application serves as a front-end interface to interact with the zkSync testnet, demonstrating how to deploy a smart contract and transfer tokens. It provides an easy-to-use interface for viewing transaction history in real-time, offering a practical demonstration of zkSync's Layer 2 scalability and token transfer functionality.

### Key Highlights:

- **Deploy a Simple Smart Contract:** Deploy a basic smart contract on zkSync using `web3.zksync.deployContract()`.
- **Token Transfer from Faucet:** Transfer tokens from a zkSync faucet to the deployed smart contract using `web3.zksync.transfer()`. Input fields are provided for the contract address, recipient address, and transfer amount.
- **Real-Time Transaction History Dashboard:** View live transaction updates for contract deployments and token transfers. The dashboard displays transaction hash, from address, to address, amount, status (pending, confirmed, or failed), and block number.
- **Automated Faucet Integration:** Request testnet tokens from the zkSync faucet with a single click. Receive feedback on the success or failure of the token request.

## Features

### Smart Contract Deployment

- Deploy a basic smart contract on zkSync.
- View the deployed contract address on the UI.

### Token Transfer from Faucet

- Transfer tokens from a zkSync faucet to the deployed smart contract.
- Input fields for contract address, recipient address, and transfer amount.

### Real-Time Transaction History Dashboard

- Live updates for contract deployments and token transfers.
- Displays transaction details including hash, from/to addresses, amount, status, and block number.

### Automated Faucet Integration

- Request testnet tokens from the zkSync faucet with a single click.
- Feedback on token request success or failure.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For styling the application.
- **ChainSafe Web3-Plugin-zkSync**: For zkSync network interactions.
- **Web3.js**: For blockchain interactions.
- **React Router**: For navigation.
- **zksync.js**: For zkSync Layer 2 operations.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Michael-Nwachukwu/ZkS-Fend
   cd ZkS-Fend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Setup and Running Locally

1. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following variables:

   ```env
   REACT_APP_ZKSYNC_API_URL=<zkSync-api-url>
   ```

2. **Run the application:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Usage

- **Deploy a Contract:** Navigate to the deployment page, input the contract code, and deploy it.
- **Transfer Tokens:** Go to the transfer page, input the contract address, recipient address, and amount, and submit the transfer.
- **View Transaction History:** Access the transaction history dashboard to see real-time updates.

## Error Handling

- **Invalid Inputs:** Displays error messages for invalid contract addresses or transfer amounts.
- **Failed Transactions:** Provides feedback on failed transactions, including reasons for failure.
- **Contract Deployment Errors:** Notifies users of issues during contract deployment.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Ensure your code follows the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
