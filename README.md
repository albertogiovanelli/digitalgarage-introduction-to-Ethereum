# digitalgarage-introduction-to-Ethereum

Teaching purpouse, Introduction on tools to develop a project based on Ethereum Blockchain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Version

Alpha 0.01

# Environment

Local on Ganache

## Requirements

1. Download and install Node.js
2. Install Yarn globally: `npm install -g yarn`
3. Install Truffle v4.0.1 `yarn add global truffle`
4. Install Ganache v6.1.0 `yarn add global ganache-cli`

## How to run the project

Once ganache is started you can deploy Smart Contracts on your local blockchain.

1. Clone this project
2. Start Ganache: `ganache-cli`
2. CD to the project directory: `cd digitalgarage-introduction-to-Ethereum`
3. Install project dependencies: `yarn install`
4. Compile smart contracts on local network: `truffle compile`
4. Migrate smart contracts on local network: `truffle migrate`

## License

This project is licensed under the MIT License
