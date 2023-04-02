---
tool: DJED 
author: Donald
date: 14 Feb 2023
chain: Cardano
deepDive: True
---

#dao-tool #deep-dive 

# DJED Stablecoin
**Author:** *Donald*
**Date:** *14 Feb 2023*


## 1. Introducing DJED - Cardano's First Stablecoin

The Cardano Ecosystem has a well-documented history of assigning significance to the naming of its products. The ecosystem was named after the renowned Italian mathematician Gerolamo Cardano, while its native token was named after the English mathematician Ada Lovelace. The latest addition to the ecosystem is the first stablecoin, named Djed, which takes its name from an ancient Egyptian symbol that symbolizes stability ( 𓊽 ). With ancient Egypt's rich history in mathematics, this latest branding choice is yet another testament to the ecosystem's commitment to relevance and significance. It never ceases to impress those who observe it closely.

In basic terms, Djed, a Cardano-based stablecoin, boasts an algorithmic design that promises stability through its use of smart contracts. The digital asset is pegged to the US Dollar and offers an added layer of security through its reserve of base coins (Shen), which are minted or burned based on market demand. With its innovative design, Djed aims to provide a reliable and steady store of value in the volatile world of cryptocurrencies.

The innovative stablecoin, Djed, has been brought to life through the collaboration of fintech firm COTI and Cardano's lead developer Input Output. For more on this topic click [**here**](https://www.theblock.co/post/206107/cardano-based-exchanges-confirm-djed-listings-ahead-of-stablecoin-launch?utm_source=cryptopanic&utm_medium=rss). With the expertise of both entities, this project aims to provide a stable, secure, and cutting-edge solution for the cryptocurrency market. The coming together of these two influential players in the field shows once again their shared vision for a better financial future.

## 2. What are stablecoins: A Guide to the New Era of Digital Currency

With the rise of cryptocurrencies, the world has been introduced to a new form of currency that operates outside of traditional banking systems. However, one major challenge with traditional cryptocurrencies like Bitcoin, Ethereum or even Cardano is their volatile nature - their value can fluctuate greatly within a short period of time.

In today's ever-changing and volatile market, finding a reliable and stable form of currency can be a daunting task. But, there is an additional player in the digital currency game that aims to change this. **Stablecoins**, a type of digital token, are designed to maintain a steady value by being pegged to a stable asset, such as the US dollar.

There are two main types of stablecoins: **collateralized** and **uncollateralized**.

**Collateralized stablecoins** are backed by a reserve of assets, such as fiat currency or other cryptocurrencies. The value of the stablecoin is directly tied to the value of the assets in the reserve. For example, if a stablecoin is backed by a reserve of US dollars, the value of the stablecoin will remain close to the value of the US dollar.

**Uncollateralized stablecoins**, on the other hand, are not backed by a reserve of assets. Instead, they rely on algorithms and market forces to maintain their stability. These stablecoins use complex economic models to ensure their value remains stable, even in volatile market conditions. 

Another type of stablecoin is the **algorithmic stablecoin**. They are designed to automatically adjust their supply to maintain stability in the face of market fluctuations by employing algorithms and smart contracts to automatically buy and sell tokens to keep their value in line with the stable asset they are pegged to. 

For example TerraUSD, also known as UST, was an algorithmic stablecoin designed to maintain a peg to the US dollar by adjusting its supply based on demand.

**The collapse of TerraUSD (UST)** in the past year has cast doubt on the reliability of algorithmic stablecoins and its ability to maintain its stability. This has adversely impacted the public's perception and adoption of this new form of digital currency. 

Despite the setback, the technology behind stablecoins is continually evolving and improving. As a result, it is highly likely that stablecoins will revolutionize the world of finance, providing a more stable form of currency for both individuals and businesses. As the industry continues to mature and regulatory frameworks are developed, it's possible that stablecoins may gain wider acceptance and become a viable alternative to traditional currencies.



## 3. How Djed Works: A Closer Look at its Stability Mechanism


**Djed** has entered the market, promising to provide stability and security to its users. What sets it apart from other stablecoins is its overcollateralization with each **Djed** token backed by at least four times its value in reserve and being completely decentralized governed by smart contracts and driven by the community.

To supplement the **Djed** reserve pool, the creators of the stablecoin have also introduced a reserve coin called **Shen**. While **Shen**'s value may fluctuate, it absorbs any price changes in ADA to ensure stability for **Djed** users.

To maintain the peg ratio of the stablecoin, a minting fee is collected in an ADA reserve pool. As the pool grows from transactions, it increases liquidity and the price of **Shen**. According to simulations, this growth can reach up to 10% per year.

But the benefits of owning **Shen** don't end there. **Shen** owners also receive a share of the ADA pool as a reward for participating in maintaining the peg ratio. These rewards are paid out when withdrawing **Shen** for ADA.

However, there are limitations to **Shen**'s flexibility. Holders won't be able to convert **Shen** to ADA if the reserve ratio falls below the minimum amount defined by the contract. Similarly, the contract prevents any further minting of **Shen** once the reserve ratio hits the maximum amount to avoid diluting rewards for **Shen** holders.

**Djed** users also have priority in redeeming their tokens for ADA. With collateralisation ranging between 400% and 800%, **Djed** ensures a high level of security for its users.

While **Djed** may be a new entrant to the stablecoin market, its overcollateralization and reserve coin system show promise for providing stability and liquidity to its users. With the potential for growth and rewards, it will be interesting to see how **Djed** fares in the market in the coming months.

![](https://i.imgur.com/ctQBJvU.png)



---
#### <u>**Disclaimer:**</u> Most of the information in the sections that follow, you will find an abridged version of the [**Djed Technical Whitepaper**](https://eprint.iacr.org/2021/1069.pdf). It is important to note that the information presented is simplified and intended for the general audience. The complete technical whitepaper should be consulted for a more comprehensive understanding of the Djed stablecoin and its underlying technology.


## 4. Overview of Current Djed Version 

There exist two versions of Djed: 


* **Minimal Djed** this version is designed to be as simple, intuitive, and straightforward as possible, without compromising stability.
* **Extended Djed:** this more complex version provides some additional stability benefits. The main differences are the use of a continuous pricing model and dynamic fees to further incentivize the maintenance of the reserve ratio at an optimal level.

The current implemented version is Minimal Djed. 

### 4.1. Stability Properties of Minimal Djed

In the whitepaper the protocol provides several **stability properties** which are: 

* **Peg upper and lower bound maintenance *(Theorem 1 & 2)*:** the price will not go above or beyond the set price. In the normal reserve ratio range, purchases and sales are not restricted, and users have no incentive to trade stablecoins outside the peg range in a secondary market. 
* **Peg robustness during market crashes *(Theorem 3)*:** up to a set limit that depends on the ' reserve ratio, the peg is maintained even when the price of the base coin falls sharply.
* **No insolvency *(Theorem 4)*:** no bank is involved, so there is no bank contract to go bankrupt.
* **No bank runs *(Theorem 5)*:** all users are treated fairly and paid accordingly, so there is provably no incentive for users to race to redeem their stablecoins.
* **Monotonically increasing equity per reserve coin *(Theorem 6)*:** under some conditions, the reserve surplus per reserve coin is guaranteed to increase as users interact with the contract. Under these conditions, reserve coin holders are guaranteed to profit.
* **No reserve draining *(Theorem 7)*:** under some conditions, it is impossible for a malicious user to execute a sequence of actions that would steal reserves from the bank.
* **Bounded dilution *(Theorem 8)*:** there is a limit to how many reserve coin holders and their profit can be diluted due to the issuance of more reserve coins.

These properties are proved mathematically to demonstrate the stability and robustness of the Minimal Djed stablecoin system. 

### 4.2. Minor Issues of Minimal Djed

Minimal Djed is a simple solution that addresses major stability concerns, but it is susceptible to a few known minor issues. These minor issues are addressed in an extended version of Djed, called Extended Djed, which is more complex but retains the same stability principles as Minimal Djed.

* **Reserve Draining Attack with Price Foresight:** Minimal Djed is vulnerable to a variation of **Theorem 7** if the assumption of constant exchange rate does not hold. A malicious user who can predict how the exchange rate will evolve can drain the bank's reserves.
* **Wholesale Discount:** In Minimal Djed, the price is fixed before the action, but every action changes the balance of reserves and StableCoins/ReserveCoins, affecting the future price. Therefore, the total price paid or received depends on how the StableCoins/ReserveCoins are bought or sold.
* **Zero equity:** When the reserve ratio falls to one, the equity falls to zero, making the target price of ReserveCoins also zero. A minimal price was introduced to avoid unlimited purchases, but this might be inconsistent with the market price and discourage users from buying ReserveCoins.
* **Rigid Fees:** The pricing model doesn't allow for smooth adjustments to fees to encourage operations that drive the reserve ratio to an optimal level and discourage operations that drive it away from the optimum.
* **"Haircut" for Stablecoin Holders:** In the event of a peg loss, StableCoin holders suffer financial losses, and Minimal Djed does not have mechanisms to cover these losses.
* **ReserveCoin Bank Runs:** The analogue of **Theorem 5** for reservecoins does not hold, and when the reserve ratio is close to rmin, ReserveCoin holders may race against each other to sell their ReserveCoinss, leading to further sales being blocked when rmin is reached.

### 4.3. Chart Analysis

To understand how DJED will fare in different market scenarios, a chart analysis has been conducted to identify four potential scenarios related to changes in the price of ADA. The analysis concludes that while it is difficult for DJED to lose parity, holders of SHEN, the reserve coin for DJED, run a greater risk.

In the worst-case scenario, if the price of ADA falls significantly (more than 75% from the breakeven point), and DJED holders do not burn their tokens, it could lead to a challenging situation. However, if DJED holders do burn their tokens, it could help maintain the peg ratio and prevent losses for SHEN holders.

Visit the following [**article**](https://medium.com/@jotapippo/djed-an%C3%A1lisis-gr%C3%A1fico-f75a71dab5cf) to find the original chart analysis illustrated below, explained in great detail.

![](https://i.imgur.com/21nKkV5.png)
![](https://i.imgur.com/hZ20C6M.png)
![](https://i.imgur.com/9Jh2s5R.png)
![](https://i.imgur.com/vrIaKID.png)

## 5. Why Djed is Different from TerraUSD (UST)?

### 5.1. Luna Crash: Quick Recap

The crash of the cryptocurrency Luna was primarily caused by its connection to TerraUSD (UST), according to reports. On May 7, 2022, over $2 billion worth of UST was unstaked from the Anchor Protocol, leading to a rapid liquidation. This caused the depegging of UST from the US dollar and sparked panic among traders who started exchanging 90 cents worth of UST for $1 of Luna.

The sell-off led to an increase in the circulating supply of Luna, causing its price to drop dramatically to a fraction of a penny. This crash was largely due to the instability of UST, which was not backed by any form of cash, treasuries, or other assets.

The Luna crash has raised concerns about the stability of cryptocurrencies that are not backed by any tangible assets. In the absence of a solid backing, these currencies are highly susceptible to market volatility and can quickly lose value. This highlights the importance of investing in cryptocurrencies that are backed by tangible assets or have a stable backing mechanism.

Furthermore, the Luna crash serves as a cautionary tale for those considering investing in cryptocurrencies that are not backed by anything. It is crucial for investors to thoroughly research and understand the underlying mechanics of a cryptocurrency before investing their hard-earned money.

### 5.2. What about Djed

The Djed algorithmic stablecoin design was mostly influenced by three stablecoin protocols:

1. **Seigniorage Shares:** The seigniorage shares protocol is an early example of an algorithmic stablecoin. It adjusts the circulating supply by encouraging users to sell their stablecoins in exchange for seigniorage shares. Djed's reservecoins are similar to seigniorage shares but its revenue comes from market making instead of seigniorage.

2. **DAI:** DAI is a crypto-collateralized stablecoin that provides stablecoin-denominated loans instead of reserves. Unlike commercial bank money, crypto-collateralized stablecoins cannot be exchanged for anything by withdrawing from the stablecoin contract's reserves because there are no reserves.

3. **Staticoin:** The Staticoin protocol has a riskcoin similar to Djed's reservecoin. The main difference is that riskcoin provides leverage with respect to base coins, while reservecoin's appeal is mostly in the market making revenue through fees, as well as some leverage. Djed also has minimum and maximum reserve ratio thresholds, which Staticoin does not have.

These three protocols have proven to provide stability even in volatile markets, making it clear that Djed is nothing like TerraUSD. With all the features described in this article and influences, Djed is poised to make a significant impact in the world of algorithmic stablecoins.

## 6. Additional information

Relevant Links:
[**Official DJED Website**](https://djed.xyz/)
[**Unofficial DJED Twitter Account**](https://twitter.com/DjedStablecoin)
[**Official COTI Twitter Account**](https://twitter.com/COTInetwork?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)
[**Official COTI Medium Account**](https://medium.com/@cotinetwork)

---
**-D.**

**Disclaimer:** The content is for informational purposes only, may include the author's personal opinion, and does not necessarily reflect the opinion of littlefish Foundation. Most of the information covered in this article was obtained from [**Djed Technical Whitepaper**](https://eprint.iacr.org/2021/1069.pdf) and was analyzed independently. 

