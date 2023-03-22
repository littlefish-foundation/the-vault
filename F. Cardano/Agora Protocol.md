---
tool: Agora
author: Emir
---

#dao-tool #cardano #deep-dive 

**Author:** *Emir Olgun*
**Date:** 19 February 2023

## Introduction

DAO governing is a very important and challenging task for any DAO, especially for DAOs of non-technical communities. There are many projects and organizations that aim to ease the process of establishing organizations on the blockchain. [Agora](https://github.com/Liqwid-Labs/agora) protocol is a library of smart contracts that aims to provide an easy and functional DAO government. Unlike other documents we created that inspect DAO governing organizations and projects, Agora is not a DAO, it does not have tokenomics or a token. Agora is just a library for governance. We will examine what Agora does and how Agora works. Also, we will have a deep dive into staking. You can check [**Governing**](https://hackmd.io/uFYmotUkSO6qCZPeFd_Q4A#DAO-Governing) and [**Smart Contracts**](https://hackmd.io/uFYmotUkSO6qCZPeFd_Q4A#Smart-Contract) as they can be informative for understanding this document.

## Staking

Staking is a process in blockchain networks where users hold a certain amount of cryptocurrency or tokens in a specialized wallet, known as a staking wallet. Staking one's assets serves as an incentive to ensure that one has a stake in the proposal one votes on for the context of governing or for more general cases, one has a stake in the network's proper functioning.
Staking also helps to prevent malicious actors from attacking the network, as their staked assets would be at risk of being forfeited if they engage in nefarious activities.

## Agora

## What does Agora do?

Agora library is created to be a one-size-fits-all governance library for projects on the Cardano blockchain. It aims to be a modular and flexible library. The library includes the smart contracts for the management of a treasury containing ADA and other assets like Tokens and NFTs, changing on-chain parameters for the DAO and the minting process of particular tokens. These traits are arbitrary and can be added to the system at any point. This is very important because proposals can adapt to any change.
When a proposal is created, it must clearly define what its effects will be if passed and members are incentivized to read about the proposal before they vote. Those proposals are time-sensitive and start with a review phase. Members can read and make their decision in this phase. After the review phase, members vote on the proposals with their governance tokens.

### How Does Agora Work?

In Agora, proposal voting system works with stake pols and voting tallies. When a user votes with their stakes, the stake is added to the stake pool and voting tally is updated accordingly. 
In Agora, governance starts with **stakes**. Members deposit their governance tokens into a stake. Every member's stake creates the staking pool. Members, at any time, can withdraw from their stake. This staking pool provides the ability to manage the relationship between voting weight and the governance tokens. All members are free to withdraw their stake before the voting process. Voting is done by transactions. These transactions lock the voters' stakes and tag them with the proposal they voted on. The transactions also add the voters' contribution to the vote tally so there is a mutual locking mechanism. This mechanism prevents double voting using stakes without creating unnecessary locks on stakes.
If a voter decides to withdraw their staked tokens, they have to retract their vote before the withdrawal so the vote tally always represents the sum of all actively locked tokens behind a specific vote.
Members can also vote on multiple proposals because the lock only prevents withdrawing and depositing governance tokens.

When the voting closes, the final vote tally becomes frozen and the proposal encodes several possible outcomes. All proposals have one common negative outcome which is **no action**. The proposals can have, depending on the DAOs rules, a quorum for the votes and if any of the actions do not reach the quorum, the proposal fails. If any of the actions of the vote reaches quorum, the action that is encoded for the majority vote has to be taken.

When an action that is not **no action** comes out of the vote, the **effect** comes in. The proposal encodes a list of effects that must take place. Unlike the traditional systems where an elevated actor implements the effects, any member is able to implement the effects of the proposal. In practice, this actor is most likely going to be someone deeply involved with the particular DAO but technically any member can do it. The executive power for the specific action is temporarily extended to the actor who wishes to implement the changes but there are also checks in place that *guarantee* the change is done correctly.

### Possible Drawbacks of On-Chain Governance

There are possible drawbacks of on-chain governance that may result in low participation in projects.

- Very few things live on-chain. Implementing effects properly which are off-chain cannot be guaranteed. As not all decisions have on-chain effect, most decisions are to be made in the spot.
- On-chain governance is by nature public and visible which is a good thing mostly but this can also lead to coercion, intimidation and bribing to achieve a desired outcome.
- Exploitation of DeFi protocols can also cause being able to vote without having a stake.
- Participation can be limited due to the low incentives involved. Transaction costs can lead to voters with low amount of governance tokens not participating due to their low influence and the voters with higher amounts of governance token are incentivized to vote.

## Conclusion

Agora aims to solve an important blocker for most people which is setting up the infrastructure of the on-chain organizations. The Agora Library can be very useful for new and existing DAOs and can be used by other projects for more detailed and tailored governing infrastructures.

## Additional Links
Relevant Links:
[**Agora Notion**](https://liqwid.notion.site/e85c09d2c9a542b19aac8dd3d6caa98b?v=d863219cd6a14082a661c4959cabd6e7)
[**Agora Github**](https://github.com/Liqwid-Labs/agora)

**Disclaimer:** The content is for informational purposes only, may include the author’s personal opinion, and does not necessarily reflect the opinion of littlefish Foundation. Most of the information covered in this article was obtained from several links above mentioned and was analyzed independently.