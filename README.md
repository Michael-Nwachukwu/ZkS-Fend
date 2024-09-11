# zkSync Token Transfer Dashboard

This front-end web application, built using React and the ChainSafe Web3-Plugin-zkSync, allows users to interact with the zkSync network. The application provides functionalities for deploying Solidity smart contracts and transferring tokens from a zkSync faucet to a contract address. The user interface is designed to be simple and intuitive, focusing on guiding users through these technical operations smoothly.


## Table of Contents

- [zkSync Token Transfer Dashboard](#zksync-token-transfer-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
    - [Key Highlights:](#key-highlights)
  - [Features](#features)
    - [The UI Elements](#the-ui-elements)
    - [User Flow](#user-flow)
    - [Smart Contract Deployment](#smart-contract-deployment)
    - [Token Transfer from Faucet](#token-transfer-from-faucet)
    - [Real-Time Transaction History Dashboard](#real-time-transaction-history-dashboard)
    - [Automated Faucet Integration](#automated-faucet-integration)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Setup and Running Locally](#setup-and-running-locally)
  - [Usage](#usage)
  - [Error Handling](#error-handling)
  - [Conclusion](#conclusion)
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


### The UI Elements

-**Deploy Contract** button to initiate the contract deployment.
Status indicators show deployment progress (loading, success, error).
Upon success, the contract address is displayed.
Error Handling: Clear error messages in case of failure.
Token Transfer: Users can transfer tokens from the zkSync faucet to a contract address by entering the recipient address and token amount.

-**Transfer Tokens** button to initiate the transfer.
Status indicators to show the result (pending, success, failure).
Error Handling: Proper validation ensures valid input fields and displays error messages for issues like invalid address or insufficient funds.
Transaction History: A panel lists recent transactions, including contract deployments and token transfers.

-Displays contract addresses and transfer statuses.
Color-coded indicators for transaction statuses (green for success, red for error, etc.).


### User Flow

-**Landing Page**: Users are greeted with the ETHSafari, ChainSafe, and zkSync logos prominently displayed.
Deploy Contract: Users click the "Deploy Contract" button, and the UI provides real-time feedback during deployment. The contract address is shown upon success.
Transfer Tokens: Users enter the recipient address and token amount, then click the "Transfer Tokens" button. The app displays status updates for the transaction.
Status Updates: Users can view the status of their contract deployments and token transfers in a dedicated history panel.
Design Considerations:

-**Responsive Design**: The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

-**Professional and Modern Aesthetic**: The design features a clean, neutral color palette (white, gray, blue accents) with modern typography and minimalistic icons. ETHSafari, ChainSafe, and zkSync logos are prominently displayed.

-**Simple and Intuitive UI**: Despite the technical nature of the actions, the UI simplifies the process with clear calls to action and status feedback.

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

## Conclusion

This project successfully provides an intuitive interface for deploying smart contracts and transferring tokens on the zkSync network, with a focus on user experience, responsiveness, and professional design. It serves blockchain enthusiasts and developers, facilitating seamless interactions with zkSync.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Ensure your code follows the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
