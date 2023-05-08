---
title: Milkomeda Deep Dive
tool: Milkomeda
date: 19 Apr 2023
author: Donald
chain: SideChain
---
#ocean-tech 

# Milkomeda Deep Dive
**Author:** *Donald*
**Date:** *19 Apr 2023*

The Milkomeda protocol introduces a new technology that connects the Cardano network with Ethereum and other similar blockchains, aiming to enhance collaboration and improve user experience. By leveraging the capabilities of Ethereum's core system, Milkomeda aims to provide developers and users access to features from both blockchain ecosystems and potentially increase the variety of decentralized applications on Cardano.

### In Brief

1. *Milkomeda protocol enables Cardano users to access Ethereum smart contracts directly.*
2. *Integrates Solidity, expanding the developer community and facilitating dApp development.*
3. *Connects platforms like Cardano and Algorand to EVM contracts and provides staking rewards.*
4. *Enhances cross-chain interoperability with blockchain bridges and wrapped smart contracts.*
5. *Inherits key elements from EVM-based ecosystems and plans to implement future innovations.*
6. *Offers scalability, security, user experience, and developer experience.*
7. *Reshapes the blockchain industry by fostering collaboration and expanding dApp availability.*


### What is Milkomeda?

The Cardano (ADA) network now provides its users with enhanced flexibility and interoperability, following the recent introduction of the Milkomeda protocol's innovative feature. This addition allows Cardano wallet holders to access Ethereum Virtual Machine *(EVM - the computation engine responsible for managing Ethereum's blockchain state and enabling smart contract functionality)* smart contracts directly. This simplifies the process for developers to build decentralized applications (dApps) and decentralized finance (DeFi) platforms on Cardano. Although Cardano's blockchain has traditionally used Haskell and Plutus for programming smart contracts, the integration of Solidity, Ethereum's programming language, aims to expand the developer community and yield lasting impacts in the future. This update enables developers to harness the power of Solidity without the need to learn a new language or install additional toolkits.

### Milkomeda Benefits


Milkomeda is a smart contract-enabled sidechain protocol that offers several benefits to its users. Sidechains are separate blockchains that operate alongside primary blockchains and are designed to allow for the transfer of assets between the two chains. If you would like to learn more about sidechains, you can read this informative [**article**](https://crypto.com/university/what-are-sidechains-scaling-blockchain).  The benefits of Milkomeda's sidechain protocol include:

* Connecting platforms like Cardano and Algorand to Ethereum Virtual Machine (EVM) contracts
* Facilitating staking rewards for all EVM users, including smart contract developers
* Automatic payment of staking rewards every five days for Cardano products built on the Milkomeda platform

In addition to these benefits, the Milkomeda protocol enhances the utility of Cardano tokens for holders by enabling the exclusive use of ADA for applications, rather than Ethereum's native token, Ether (ETH). This development is a significant step forward in expanding Cardano's usefulness and promoting greater collaboration and interoperability within the blockchain ecosystem.

### Cross-Chain Interoperability 

Milkomeda, an L2 protocol developed by dcSpark, aims to enhance cross-chain interoperability by establishing blockchain bridges between Cardano and other prominent layer 1 networks such as Solana and Algorand. These bridges facilitate the transfer of assets between different blockchain networks, fostering a more interconnected and accessible ecosystem. Layer 1 blockchains refer to the foundational infrastructure of a blockchain network, responsible for maintaining the core protocol, consensus mechanism, and transaction processing. Some well-known Layer 1 chains are Bitcoin, Ethereum, Cardano etc.

Focusing on non-EVM projects, Milkomeda seeks to accelerate their mass adoption by providing EVM-compatible sidechains. By leveraging sidechain technology and introducing wrapped smart contracts, the protocol allows developers to create dApps using familiar programming languages and tools, streamlining the onboarding process. This innovation also enables users to interact with smart contracts on various sidechains without needing to switch wallets or acquire extensive knowledge of the underlying technology.

The wrapped smart contracts function lets applications or users easily transfer smart contracts from one blockchain to another, making them usable for Cardano users. This means people can smoothly work with smart contracts from different blockchains, even if they're not written in Cardano's language, Plutus. Wrapped smart contracts also need less code for cross-chain applications, which means fewer security risks and quicker development times. In summary, Milkomeda's approach encourages smooth interactions between different blockchains and supports growth across multiple platforms.

If you would like to learn more about **wrapped smart contracts**, check out this [**article**](https://www.coindesk.com/learn/what-are-wrapped-tokens/).
### Key Features and Future Innovations

Milkomeda aims to provide non-EVM ecosystems with the ability to inherit key elements, such as rollups and Solidity support, from EVM-based ecosystems. This groundbreaking technology allows developers to access all of the tooling from the EVM ecosystem, making building, deploying, debugging, and auditing projects work the same as in Ethereum. The ability for developers to port projects from Ethereum will significantly broaden the selection of dApps available on supported L1 blockchains.

Security consistency across deployments ensures that multi-chain deployed code has the same security properties, eliminating the need for individual audits per chain. Future innovations in zero-knowledge technology will be implementable as L3+ solutions on top of Milkomeda, empowering startups to build on chains like Cardano, Algorand, and Solana while tapping into the talent and resources of the largest community for smart contracts (Solidity).

Key features of Milkomeda include scalability, security, user experience, interoperability, portability, and developer experience. It can scale to hundreds of transactions per second without sacrificing long-term decentralization. The protocol aims to leverage the power of rollups for all chains and collaborates with wallets to ensure a seamless user experience.

Developers and end-users can get started with Milkomeda by following [**comprehensive guides**](https://dcspark.github.io/milkomeda-documentation/cardano/for-developers/) provided for Cardano and Algorand, which offer valuable context on the underlying technology, benefits, and processes that enable the Milkomeda C1 EVM Sidechain and the Milkomeda A1 Rollup to operate.

Rollups refer to a method that allows to process transactions on a separate, more efficient blockchain (referred to as Layer 2) and then transfer the transaction data back to the primary blockchain (Layer 1 or mainnet) at a reduced cost. As a result, users can take advantage of the enhanced speed and affordability of the rollup while still enjoying the security provided by the larger blockchain.

### Ethereum Virtual Machine (EVM)

The Ethereum Virtual Machine (EVM) is a crucial component of the Ethereum ecosystem that powers the blockchain and enables smart contract functionality.EVM  also serves as Ethereum's computation engine, it manages the state of the blockchain, facilitates user adoption and decentralization, participates in block creation and transaction execution.  

The EVM interprets smart contract code (bytecode) in Opcodes, which are low-level instructions for performing operations like arithmetic, logic, and data manipulation. 

Nodes on Ethereum keep copies of transaction data, which the EVM processes to update the **distributed ledger**. A distributed ledger is actually the backbone of the blockchain. It is a decentralized and synchronized database shared across multiple nodes which ensures data transparency and immutability.

The architecture of the EVM is based on a **stack-based memory structure**. Stack-based memory structures store and manage data in a last-in, first-out (LIFO) manner, enabling efficient memory usage and simplified program execution.

The EVM is considered **Quasi-Turing complete** because it is limited by the amount of gas provided with each transaction. Turing-complete means that a machine can simulate any computer algorithm given enough time and resources.

Finally, the EVM processes the Ethereum state transition function to ensure that transactions are technically valid, thereby maintaining the integrity of the distributed ledger.


### Conclusion

In conclusion, the Milkomeda network's innovative approach to cross-chain interoperability and access to EVM smart contracts has the potential to reshape the blockchain industry. By leveraging the strengths of the Ethereum ecosystem and integrating them into non-EVM platforms like Cardano. Milkomeda is fostering collaboration, expanding the range of available dApps, and unlocking new opportunities for developers and users alike. As blockchain technology continues to evolve, initiatives like Milkomeda will play an essential role in driving innovation and promoting a more interconnected and accessible ecosystem.

### Additional information

Relevant Links:
[**Official Milkomeda Website**](https://www.milkomeda.com/)
[**Official Milkomeda Twitter Account**](https://twitter.com/Milkomeda_com)
[**Official Milkomeda Medium Account**](https://medium.com/@milkomedafoundation)
[**Official Milkomeda Github Account**](https://github.com/orgs/dcSpark/repositories)
