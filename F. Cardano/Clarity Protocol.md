---
tool: Clarity
author: Emir Olgun
---

#dao-tool #cardano #deep-dive 

**Author:** *Emir Olgun*
**Date:** *18 February 2023*

## Introduction

Clarity community is working on a protocol called Clarity Protocol that aims to ease the process of building DAOs by providing the infrastructure of Smart Contracts and Tokens. The infrastructure is based on a protocol called [[Agora Protocol]]. We will see what Clarity Protocol does, how it works and why would it be beneficial for new DAOs. We will also dive deep into the concepts of Smart Contracts, DAO governing, DAOs and Tokens in order to understand Clarity more in this report.

## Deep Dive

### DAO

DAO stands for Decentralized Autonomous Organization. It is an organization that is governed by a set of rules encoded as computer programs on a blockchain. DAOs are designed to be decentralized, meaning that no single person or entity controls the organization. Instead, decisions are made by consensus among the members of the DAO, who typically hold tokens or shares in the organization.

DAOs operate using smart contracts. These smart contracts automate many of the processes and decision-making functions of the DAO, including voting, budgeting, and allocation of resources.

### Smart Contract

A smart contract is, in the most basic terms, an executable program running on the blockchain. This program is a contract that checks for certain conditions, which are pre-determined, to execute a transaction. The importance of smart contracts is they provide trust between opposite parties of the transaction as the conditions of the contract can be seen by anyone and these conditions are not alterable. If the conditions of the smart contract cannot be met, the funds locked in the smart contract can never be accessed by anyone, <u>it is absolutely impossible</u>. For example, locking a DAO’s treasury in a smart contract, which only allows withdrawal when a number of people sign the contract, can provide a very high level of security and prevent a member with a high level of governance power to spend the money on things which the community does not agree on.

### Tokens
In most Blockchains, there are two types of assets; native asset and the assets that are created by third parties to run on the blockchain. In Cardano, the native asset is ADA. The other tokens can be minted by users and used as a means of exchange or can have much more properties than the native assets. Some of these properties are, DAO governance, a password like ticket for accessing certain Smart Contracts, Websites or DAOs. NFTs are also a specific form of a token.

### DAO Governing

How to govern? This question is as old as humankind. Almost all systems we created are based on delegation. Because we cannot participate all the time and the decision-making process can be very long, we chose to give the power of governing to a smaller number of people. With the help of Blockchain technology, we can now participate in the decision-making process easily. We can create proposals, vote on proposals and execute successful proposals as members of a decentralized community. Blockchain technology also provides transparency for our communities. The treasury of the DAOs can be visible to anyone and the control of it does not have to lie with a single member.

## Clarity Protocol

### Features

Clarity Protocol provides very useful services which are;

- Smart Contracts for managing DAO treasury.
- Smart Contracts for voting for proposals.
- Governance Tokens for the DAOs.

In the future more features are expected and some of them are explained in the ==Future Plans==.

### What does it do?

Clarity protocol is a library that provides the smart contracts and Tokenomics for governing DAOs. In a DAO every member has a right to vote on proposals. This voting system is similar to the weighted voting system where every individual has different voting power. Clarity Protocol uses tokens for this system. In this protocol, members with sufficient tokens can also create proposals for other members to discuss and vote on.

### How does it work?

Every member’s voting power is determined by how many governing tokens they have in their wallet. A user deposits their governance tokens into stakes, which allows them to create and vote on proposals. Staked amount determines the voting weight. Those proposals can be the management of the DAO’s treasury, changing on-chain parameters of the DAO or minting tokens or NFTs.
Any proposal on vote has a default state of fail unless certain conditions are met. These conditions are usually a level of approval votes, so it does not work like our traditional voting systems where the majority of the vote decides what happens. For example, if the approval level requirement is 2 million tokens, the proposal will fail if the majority voted positive and the tokens marked with approval are less than the barrier.

### How would a new DAO benefit?

Forming a DAO for non-technical people can be quite challenging and open to fraud. A service for setting up the infrastructure of a new DAO can be extremely useful and more importantly bring down the barriers of entry to the blockchain ecosystem significantly. With services like Clarity Protocol, new DAOs can create their own governing tokens, other tokens and NFTs. Set up their governing system and treasury management protocols quite easily.

## Tokenomics

Clarity community is planning to have the Clarity token as the governing token for the Clarity ecosystem. The total supply will be 2,000,000,000 with a 6-decimal precision.

**Distribution of Clarity Token**
![Distribution of Clarity Token](https://i.imgur.com/d7cewx7.png)

### 20% Team:

The team is the founding members which include core groups of founders, developers and contributors of the Clarity Protocol. The team is on a 2-year linear vesting period.

### 5% Advisors:

The advisors are the industry professionals who provide value to the DAO either through networks, research or specialized knowledge.

### 20% DAO Treasury:

This treasury can only be spent with the approval of the DAO through and on-chain vote. This treasury pays out rewards to Clarity DAO members for participating in governance or opting in the DAOs incentive structure.

### 3% Airdrops:

Tokens allocated for community airdrops.

### 7% Yield Farming:

Tokens allocated for incentivizing liquidity.

### 10% Ecosystem Partnership:

Tokens allocated to create relationships, support other organizations and projects and fund educational initiatives.

### 35% Future Development and Investors:

Tokens allocated for funding the future development of the ecosystem such as developer support, marketing, fundraising and administration.



## Future Plans
### Clarity Smart Contract Marketplace

Most DAOs have different needs and the generic smart contracts for DAO governing might not provide their needs correctly. Users or organizations will be able to write their own proposal features as the Plutus language allows and put them in the marketplace for other DAOs to browse and use. The usage of other smart contract features will be rewarded on the marketplace.

### Voting Rewards

DAOs will be able to implement a system where members of the community will be rewarded when they take part in voting on proposals and participating in DAO activities. The reward amount and denomination would be set by the DAOs themselves or Clarity. The rewards may be provided by the DAO itself or by Clarity for participation in a Clarity-powered DAO.

### Sub DAO/Woking Group Formation and Destruction

Creating sub-working groups for specific tasks in DAOs can be quite efficient and effective. Rapid organizational change allows the organization to easily adapt the needs. The sub-working groups will be able to have their own funds or can be funded by their DAOs. When the sub-group is no longer needed, the group can be disassembled and the remaining funds can be allocated to another part of the DAO.

### Identity-Based Voting

Currently, Clarity protocol determines a user's vote weight by the amount of governance tokens staked, further plans include calculating voting power using different mechanisms. One example is a reputation mechanism.

## Conclusion

Clarity Community is addressing a very important problem of the blockchain ecosystem. Non-technical people have a hard time entering the ecosystem and this problem blocks the ecosystem to achieve its potential. A service to set up the infrastructure of a DAO would bring those barriers down and enlarge the blockchain ecosystem significantly. One problem that comes to one’s mind is, how would a non-technical DAO could trust the smart contracts that are on the Clarity marketplace to do what they want or not have a backdoor for certain individuals to access DAOs finances or decision-making mechanisms. The Smart Contracts should have auditing mechanisms by other organizations and the non-technical DAOs might need a technical advisor for vetting the contracts they use.

## Additional Links
Relevant Links:
[**Clarity Webpage**](https://clarity.community)
[**Clarity Discord**](https://discord.com/invite/SUWpTtsJaA)
[**Clarity Twitter**](https://twitter.com/clarity_dao)



**Disclaimer:** The content is for informational purposes only, may include the author’s personal opinion, and does not necessarily reflect the opinion of littlefish Foundation. Most of the information covered in this article was obtained from [**Clarity Community Whitepaper**](https://docsend.com/view/4p6ct4pgdxhnw637) and was analyzed independently.