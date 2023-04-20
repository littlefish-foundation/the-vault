---
tool: Crystal
author: Emir Olgun
deepDive: True
chain: Cardano
date: 18 April 2023
---

#dao-tool #deep-dive #daotool-deepdive

**Author:** Emir Olgun
**Date:** 18 April 2023

Decision making in DAOs are quite difficult in general because unlike traditional organizations, DAOs make their decisions with their community. DAOs distribute special tokens to the community for the voting process and only members with these tokens are allowed to vote. Number of owned tokens also have effect on the voting, people with more than a specific amount of these tokens can also make proposals. The number of tokens needed to make proposals and the weight of the tokens during voting are determined by the DAO itself.
Almost every DAO struggle with decision making as it can be time consuming, expensive. Development of smart contracts, that are rather difficult to create, and a front-end for their community to participate in the governance process is needed.
Crystal is a DAO tool developed by Clear Contracts and Clarity community. Clarity community is also the power behind **Clarity Protocol**. Crystal makes the process of voting easy and customizable enough.
This document will dive deep into this app and try to answer how it works, what it does, what the roadmap for this tool is, and how DAOs can benefit using this tool.

## What Does It Do?

There are ways to set up DAOs. Difficult to set up but easy to use way is to write the specific smart contracts and to set up the platform that is connected to those smart contracts. This way is easy to use for members but very difficult to set up and require people with different set of technical skills. This way can be advantageous because DAOs can be in full control of their system.

Crystal allows communities to conduct off-chain voting. This off-chain voting system can utilize governance tokens just like on-chain voting. DAOs can customize the powers these tokens have. For example, people with more than 100 tokens can be admins. Communities can start their governance process very easily by setting up their DAO in Crystal platform.

**Off-chain voting** is done on the Crystal platform and the variables of deadlines, proposals and voting can be set up easily.


## How Does It Work?

Crystal uses on-chain data to conduct off-chain voting. Voting is done based on one or more governance tokens. The Policy IDs of the governance tokens are kept in Crystal and governance token information is fetched from the wallet connected to the platform and used to calculate the weight of the vote, and ability to make proposals. Admins can also decide if they want to reward the community for participating in the voting process.
The off-chain voting has two main steps, proposal, submission and voting.

**Proposal:** Proposal creation can only be done by the admins of the DAO. The platform distinguishes admins from the other members by the amount of governance tokens. Proposals are usually a statement of a problem. After proposal is created, the submission period begins right away.

**Submission:** Members of the DAO submit possible solutions to the problem stated in the proposal during the submission period. The creator of the proposal decides who can submit during the proposal creation step. Either all members can submit or only admins can. The submission period lasts for the time specified by the creator of the proposal. This date is specified during the proposal creation. After the submission period ends, the voting period begins. During this step, the proposal will show **Accepting-Submissions"** status.

**Voting:** After the submission, the voting period begins where all members of the DAO can cast and retract votes on the submissions. This period also has a time limit specified by the creator of the proposal during the proposal step. During this period, the proposal will show **Voting** status.


![](https://i.imgur.com/eOlrJag.png)

After the voting deadline, no more votes will be counted and the result will be final.

A member is required to connect their wallet to Crystal platform in order to participate in the voting process. This is essential because the governance token information is required in the voting process.

### Pros and Cons

Cardano is famous for being a quite difficult platform for development. Setting up a platform is already challenging task and having a blockchain integration especially Cardano blockchain integration is even more challenging because of Plutus programming language. Crystal offers a solution for this problem but I don't believe Crystal is the optimal solution for the governing problem but it is definitely a very useful tool. Tools like Crystal brings down the entry barrier to Cardano very significantly.

**Pros**

- Off-chain voting is free. On the other hand on-chain voting requires transactions and these transactions have fees.
- Brings down the entry barrier for new DAOs significantly.
- DAOs can start to function in a short time.

**Cons**

- This platform is not decentralized entirely because of the off-chain voting.
- DAOs do not have the full control of their governing system.
- Crystal does not have testnet support. People who want to test it out need mainnet tokens but Clarity Community is a very helpful community and will probably help.

## Conclusion

Crystal is one of the much needed tools in the Cardano ecosystem. It brings down the entry barrier for people with ideas but no technical backgrounds. Even though I believe Crystal is good for new organizations on blockchain, these organizations should eventually migrate to their own governance system as their community grow. Crystal is being developed by the Clarity Community continuously and it should be followed closely.

## Additional Links

- [Platform](https://web3.crystal.vote)
- [Guide](https://clarity-2.gitbook.io/clarity-docs/)
- [Clear Contracts Website](https://www.clearcontracts.io)
- [Clarity Website](https://clarity.community)