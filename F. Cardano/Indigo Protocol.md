---
title: Exploring Indigo Protocol
tool: Indigo
chain: Cardano
author: Donald
date: February 2023
deepDive: True
---
#dao-tool #deep-dive 
# Exploring Indigo Protocol 

### What is Indigo Protocol and What does it do?

Indigo Protocol is an autonomous synthetics protocol built on Cardano. They give their users the opportunity to be exposed to the price of real-world assets on the blockchain environment. These on-chain real-world assets are also known as synthetic assets.

### What are Synthetic Assets?
In traditional financial system, the term Synthetic Assets refers to financial products that are derived from underlying assets or financial instruments. They are designed to replicate the characteristics and performance of these underlying assets, however, they are not the same as owning the underlying assets themselves. 

For example, lets assume that a financial institution, such as a bank, created a synthetic asset based on Apple Inc. stock. In this case the created synthetic asset could be a synthetic exchange-traded fund (ETF). The created ETF would be backed by financial instruments, such as derivatives, swaps, or options, that are linked to the performance of the Apple Inc. stock. Someone who buys shares in the synthetic ETF would be exposed to the price changes of real Apple Inc. stock but would not own the actual shares of the stock. 

The responsibility for synthetic assets typically lies with the parties involved in the creation and issuance of the synthetic asset, while the responsibility for the underlying real assets or financial instruments may lie with the parties that own or hold those assets or instruments (i.e. shareholders).

In the context of decentralized finance (DeFi), synthetic assets represent the same financial instruments as in traditional finance, but in this case they are traded on blockchain platforms by using smart contracts. Similarly, DeFi synthetic assets can be used to gain exposure to a particular asset or market, such as stocks, bonds, commodities, or currencies, without actually owning the underlying asset.

### How Indigo Protocol works?
Indigo is an over-collateralized protocol, which means that the user must provide more capital than they are borrowing in order to take a loan. 

Synthetic Assets on Indigo Protocol are also known as iAssets. There are two ways you can obtain an iAsset in Indigo: by buying or by minting. Users can buy iAssets if the exchange has any available supply, if not than the second way need to be applied. When minting an asset is important to notice that the user needs to deposit collateral and create a loan. Consider the following:

If you place 450 ADA as total collateral to get a 100 iUSD loan, and the price of 1 iUSD is initially 4 ADA, and the price of ADA drops in the following days, the liquidation process will start when the value of your collateral falls below the required collateral ratio. The collateral ratio is a measure of the amount of collateral that a borrower has pledged to secure a debt or loan, and is calculated by dividing the value of the collateral by the amount of the loan or debt.

For example, if your collateral ratio is 110% *(Minimum Collateral Ratio that Indigo Protocol allows)*, the liquidation process will start when the value of your collateral falls below 440 ADA (100 iUSD x 4 ADA x 110%). If the price of ADA drops further and the value of your collateral falls below 400 ADA (100 iUSD x 4 ADA), the lender will sell the collateral to cover the outstanding debt of 100 iUSD.

The amount of ADA that you will take back after the liquidation process depends on the value of your collateral at the time of the sale. If the value of your collateral is greater than the outstanding debt, you will take back the difference between the two amounts. For example, if the value of your collateral is 450 ADA and the outstanding debt is 100 iUSD (400 ADA), you will take back 50 ADA after the liquidation process.

Liquidation in DeFi (in this case Indigo Protocol) is fast and efficient process, as it is automated by smart contracts and does not require manual intervention. Therefore you cannot lose more money than you placed initially as collateral.

The example described above is a very risky one. This kind of collateral ratio would make sense if you are really sure that the asset being used as collateral is highly stable and unlikely to decline in value. In case of volatile coins such as ADA, the higher the collateral ratio the better. 



### What is $INDY?
INDY in essence is the Governing Token of Indigo DAO. It is a Cardano native asset and as such it can be owned, held, or transferred. The total supply of INDY is 35M with a 6 decimal precision. Indigo is undergoing a [**Fair Launch**](https://medium.com/monoswap/fair-launch-is-it-really-b5bd88e22a41), therefore there has been no pre-sale nor private distribution to investors prior to launch. INDY will be distributed every Cardano epoch (five days), over a period of five years. There will be three distribution schedules for the community:
* **Governance Distribution** – Users who opt to stake their INDY into Indigo and participate in DAO Governance by voting on proposals will be eligible for INDY rewards proportionally to their pro-rata share of staked INDY.
* **Stability Pool Distribution** – Users who stake their iAssets in Stability Pools to ensure the protocol’s solvency will be eligible for INDY rewards proportionally to their pro-rata share of staked iAssets.
* **Liquidity Distribution** – Users who provide liquidity in DEXes and stake their LP tokens in Indigo will be eligible for INDY rewards proportionally to their pro-rata share of staked LP tokens.

The distribution of INDY started on 25th of November with an initial value of $2.14. It reached all time high price of $3.52 just 11 days from launch, and as of December 25th (this article was published), the value of INDY is $1.88. 
Find out more on [**Coingecko**](https://www.coingecko.com/en/coins/indigo-protocol).

### Where is Indigo Protocol Headed?

The protocol has been operating in Cardano Mainnet for only 1 month, and for now it supports only two synthetic assets, iBTC and iUSD. Just 1 week after launch it rose to the top of the list of Cardano dApps when measured by  growth of the unique accounts created.

![](https://i.imgur.com/n9oFRou.jpg)*Twitter post by community driven account [Cardano Daily](https://twitter.com/cardano_daily/status/1597213867565727745?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1597213867565727745%7Ctwgr%5E1fc2278ff5b68994381a7654b1c1e61195546ad3%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fthecryptobasic.com%2F2022%2F11%2F28%2Fcardano-dapps-witness-a-surge-in-unique-account-growth-with-indigo-protocol-leading%2F)*

As the dashboard clearly indicates, it can be considered a successfull beginning. 

The Protocol's governance token  has shown to be volatile, however, this kind of volatility is expected, especially in the short term after its launch. The value of a governance token can be influenced by a number of factors, including market demand, the performance of the DAO and its underlying projects, and overall market conditions.

Finally, Indigo Protocol seems to be committed on growing and introducing new synthetic assets on their platform. Currently, there is a vote taking place by the community on the proposal to whether or not introduce Ethereum (iETH) as a synthetic asset. This was information was announced on their [official twitter account](https://twitter.com/Indigo_protocol/status/1604993144965271552).

---
**-D.**

**Disclaimer:** The content is for informational purposes only, may include the author's personal opinion, and does not necessarily reflect the opinion of littlefish Foundation. Most of the information covered in this article was obtained from [**Indigo-Paper**](https://indigoprotocol.io/) and was analyzed independently. 