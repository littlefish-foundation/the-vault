---
tool: Liqwid 
author: Donald
date: 19 Feb 2023
chain: Cardano
deepDive: True
---
#dao-tool #deep-dive 

# Liqwid Finance
**Author:** Donald
**Date:** 19 Feb 2023


## Introduction to Liqwid - Liquidity Protocol
#### Liqwid Finance

**Liqwid** is a decentralized and non-custodial **liquidity protocol**, built on Cardano’s Plutus smart contract platform that provides an efficient and secure way for users to participate as lenders or borrowers. The protocol is completely **open source** (check out their [**Github Account**](https://github.com/Liqwid-Labs)), and enables anyone to interact with a user interface client, a contract endpoint API or directly with the smart contracts on the Cardano blockchain.

#### What is a Liquidity Protocol and Why it Matters?

In the world of cryptocurrency, liquidity is a crucial factor in determining the success of a trading platform. Simply put, liquidity refers to the ease with which one can buy or sell an asset without affecting its price. This is where liquidity protocols come in.

A **liquidity protocol** is a decentralized platform that facilitates the exchange of cryptocurrencies in a highly liquid and efficient manner. This is achieved by using automated market makers (AMMs) and smart contracts, which allow users to trade directly with each other without the need for an intermediary.

One of the key benefits of using a liquidity protocol is that it allows for faster, cheaper and more secure transactions compared to centralized exchanges. With a liquidity protocol, users can trade cryptocurrencies with other users without the need for a central order book or a matching engine, which can be slow and cumbersome.

Automated market makers play a critical role in liquidity protocols. They provide liquidity for the platform by locking up a certain amount of cryptocurrency in a smart contract, which is then used to facilitate trades. The value of the cryptocurrency is determined by an algorithm that takes into account the amount of liquidity available and the demand for a particular asset.

One of the most popular liquidity protocols is [**Uniswap**](https://uniswap.org/), which is built on the Ethereum blockchain. Uniswap uses a popular AMM model known as the Constant Product Market Maker. This model ensures that the product of the two currencies in the pool remains constant, which helps to maintain a stable price for the asset.

The popularity of liquidity protocols has led to the growth of the decentralized finance (DeFi) ecosystem. DeFi has become an important alternative to traditional financial systems, allowing users to access financial services such as lending, borrowing, and trading in a decentralized and trustless environment.

## How does Liqwid Work?

#### Supplying and Earning: How to use Liqwid's Liquidity Protocol for Cardano
Liqwid allows users to supply and borrow cryptocurrencies on the Cardano blockchain. The platform offers an easy way for users to supply liquidity and earn interest, while also providing an efficient way for borrowers to access funds.

To supply liquidity, users need to browse the "Supply Markets" section and select the asset they want to deposit. Once the user has selected the amount to supply, the transaction needs to be approved in their Cardano dApp wallet. Once the transaction is confirmed, the user's supplied liquidity is registered, and they begin to earn interest.

The interest earned is perpetually based on variable borrow rates calculated by supply and demand conditions per Market. The simulator tab in the app allows users to enter arbitrary parameters and utilization ratios to see the borrow interest rate model in action. Each supported asset on the protocol has an individual Market of supply and demand with its APY, which updates every few seconds based on the amount of liquidity supplied compared to borrowed.

There is no minimum or maximum limit to the amount users can supply, but it's important to consider the blockchain transaction cost when interacting with smart contract transactions.

Liqwid protocol only supports borrowing with variable interest rates driven by supply and demand in each Market. As interest rates are calculated per Market, users can have different borrow rates for each asset.

To withdraw, users need to navigate to the "Withdraw" tab in the "Supply Markets" section and select the amount to withdraw. It's essential to confirm that there is sufficient liquidity to complete the withdrawal order. Users can opt-out their assets from being used as collateral by switching the "Collateral" toggle on the asset(s) they want to opt-out from.


#### Borrowing with Liqwid's Liquidity Protocol: What You Need to Know

Liqwid allows users to supply and borrow cryptocurrencies on the Cardano blockchain. Borrowing with Liqwid provides users with a way to access liquidity without selling their long-term crypto-asset holdings. Additionally, it can be useful for startups covering their operating expenses.

Borrowing on Liqwid is enabled once a user supplies any supported asset to be used as collateral. After supplying the collateral, users can then browse over to the "Borrow Markets" section and click on "Borrow" for the asset they want to open a new loan in. The maximum amount that can be borrowed depends on the supplied asset(s), the amount that has been supplied, and the market's available liquidity.

Users need to repay the loan in the same asset they borrowed. The interest rate is calculated from the supply and demand ratio of the asset, and it changes constantly as supply and borrow actions are executed in a Market.

A Market's collateral factor can range from 0-90% and determines the increase in liquidity (borrow limit) that a user receives by minting the qToken. High market cap or liquid assets typically have high collateral factors, while low market cap or illiquid assets have low collateral factors.

If the borrow limit decreases, the likelihood of reaching the liquidation threshold increases. Borrow positions are perpetual, meaning there is no fixed time period to repay the loan. However, as time passes, the accrued interest on the loan increases, which causes the borrow limit to decrease.

Users need to repay the loan by navigating to their open positions and clicking the "Repay" button for the asset they borrowed from the protocol. The key to avoiding liquidation is to maintain conservative borrow limit levels, which can be done by repaying the loan or supplying more assets to increase the borrow limit.


## Additional information

Relevant Links:
[**Liqwid Website**](https://www.liqwid.finance/)
[**Liqwid Github**](https://github.com/orgs/Liqwid-Labs/repositories)
[**Liqwid Medium Account**](https://medium.com/@liqwid-finance)

---
**-D.**

**Disclaimer:** The content is for informational purposes only, may include the author's personal opinion, and does not necessarily reflect the opinion of littlefish Foundation. Most of the information covered in this article was obtained from [**Liqwid Whitepaper**](https://drive.google.com/file/d/1-UDRdjcN8sWtsir0gwcb7KMTvQOFbtII/view) and was analyzed independently. 

