---
title: COTI
tags: COTI
---


# Exploring COTI
**Author:** *Donald*
**Date:** *18 Feb 2023*

## 1. What is COTI? 


The world of finance is witnessing an unprecedented transformation with the advent of the web3 revolution, and COTI is at the forefront of this movement. COTI, which stands for **Currency of the Internet**, is a revolutionary <u>**Layer-1 DAG-Based Blockchain Ecosystem**^1^</u> that has been optimized for payments, with the aim of completely transforming the payment industry.

COTI's mission is centered around making payments faster, more secure, cheaper, and more personalized than ever before. What sets COTI apart from other blockchain ecosystems is its unique consensus mechanism, <u>**Proof of Trust (PoT)**^2^</u>, which replaces the traditional Proof of Work (PoW) or Proof of Stake (PoS) mechanisms. This innovative feature allows COTI to reduce costs and increase throughput, providing a more efficient and streamlined payment process.

COTI, despite being an **independent blockchain ecosystem**, has been designed with the capability to interact seamlessly with other blockchain networks. To this end, COTI has developed a **cross-chain bridge** solution that allows for the transfer of assets between COTI and other blockchains. The current implementation of this solution connects COTI with the Cardano blockchain, facilitating the exchange of assets between the two networks. For more on COTI Cardano Partnership click [**here**](https://medium.com/cotinetwork/announcing-our-new-partnership-with-the-cardano-ecosystem-coti-to-partner-with-catalysts-1b-32f4e3305ff8).

The cross-chain bridge is just one example of COTI's partnerships with other leading blockchain networks and projects. By teaming up with projects such as **Chainlink, Fantom, Simplex** etc., COTI is expanding its ecosystem and paving the way for new use cases for its innovative technology. Check out for more information on [**COTI's Partnerships**](https://medium.com/cotinetwork/everything-you-want-to-know-about-cotis-partnerships-cd4a02a9433e)

These strategic partnerships have enabled COTI to establish itself as a key player in the blockchain space, and demonstrate its commitment to driving innovation and collaboration in the industry. With a strong focus on cutting-edge technology, creative solutions and collaborative approach, COTI is positioned to disrupt the traditional financial landscape and usher in a new era of digital finance.


## 2. How COTI Works?

Understanding the inner workings of COTI may seem like a daunting task for those new to the cryptocurrency scene. However, there are two crucial terms underlined in the previous section that are essential to comprehend in order to gain a deeper understanding of COTI. 

The following section is designed specifically to further explain these concepts in order to fully comprehend the technicalities of COTI and the cryptocurrency market as a whole.

### 2.1. Layer-1 DAG-Based Blockchain Ecosystem

Layer-1 blockchain systems are considered to be the foundational layer of blockchain architecture. They are standalone blockchain systems that provide the infrastructure for processing and validating transactions. **Bitcoin**, the world's first cryptocurrency, is a prime example of a **layer-1 blockchain system**. Other examples include Ethereum, Litecoin, and Bitcoin Cash.

One of the key features that makes **layer-1 blockchain systems** so special is their ability to provide a **decentralized and secure payment infrastructure** without relying on intermediaries. This means that transactions can be conducted directly between individuals or organizations, without the need for a central authority or third party. This makes **layer-1 blockchain systems** particularly attractive for use cases that require trustless and transparent transactions.

Another advantage of **layer-1 blockchain systems** is their *immutability*. Once a transaction is recorded on a layer-1 blockchain, it cannot be altered or deleted. This ensures that all transactions are **permanent and transparent**, and cannot be manipulated or reversed.

However, the number of transactions that can be processed on a **layer-1 blockchain system** is limited by the block size, which can result in **slow transaction times and high fees** during times of network congestion. 

To address this challange, the COTI team has employed a **Directed Acyclic Graph (DAG)** which is a data structure that represents objects and their relationships in a one-way, non-repeating structure. In a DAG, each object is represented as a node, and each relationship between objects is represented as a directed (one-way) **edge [^1]** between nodes. 
[^1]:In Graph Theory an "edge" is the line connecting two nodes



![](https://i.imgur.com/tLs7MsG.png)

**Traditional blockchain systems** operate under a **sequential model (*diagram on the left*)** in which only one transaction can be processed at a time. Each new transaction is added to the queue and is only processed once the preceding transaction is completed. 

On the other hand, the unique structure of DAG permits **multiple transactions** to be processed **simultaneously in a parallel manner (*diagram on the right*)**, allowing for a more efficient and scalable approach to transaction validation.

The COTI team has adopted an innovative approach, enabling its users to participate in the original **layer-1 blockchain system** without any compromise on transaction speed. This unique strategy allows users to enjoy the full benefits of blockchain technology while still ensuring fast transaction processing times.

By implementing this approach, COTI is addressing one of the most significant challenges faced by blockchain systems - **speed**. The team has effectively created a system that strikes a balance between the advantages of a decentralized, trustless network and the speed of centralized systems. This has the potential to open up a range of exciting new possibilities for blockchain applications, such as secure and fast micropayments, that were previously unattainable due to slow transaction processing times.

### 2.2. Proof of Trust (PoT)


The DAG structure is built from transactions connected through time by harnessing trust-based algorithms to create a unique consensus-based confirmation mechanism called Proof of Trust (PoT). 

COTI's Trustchain Algorithm uses Trust Scores to validate and confirm transactions faster, and it grows as new transactions attach to prior transactions with similar degrees of trust.

The Trust Scores are calculated using a unique machine-learning algorithm that takes into consideration the network participants' historical behavior data and objective information about them. The Trust Score Algorithm ensures optimal performance of the Trust Score-based Source Selection Algorithm. The recommended level of trust for a transaction is 1000, and transactions created by highly trusted network participants (i.e. TrustScore = 85) need at least **12 confirming transactions**, while transactions from low trusted network participants (i.e. TrustScore = 12) need at least **84 confirming transactions** in the chain.

The DAG-based distributed ledger technology, also known as the Cluster, reaches faster consensus when confirming transactions by using COTI's Trustchain Algorithm. Eventually, the Cluster will be able to validate and confirm hundreds of thousands of transactions per second. All accounts in the payment network have a Trust Score, which is changed according to a user's payment statistics and several event types. The Trust Score Nodes collect transaction and other statistics to continuously update participants' Trust Scores.

COTI's innovative approach allows for fast and efficient transaction processing, low fees, and network security without the need for traditional mining (such as the cas of PoW). Every user is incentivized to engage in trust-building behavior due to the benefits associated with having a high level of trust, such as faster confirmation times. COTI's unique combination of DAG-based technology and trust-based algorithms provides a secure and efficient network for various applications. 

![](https://i.imgur.com/mubAToU.jpg)

### 2.3. MultiDAG Layer

The COTI multiDAG layer consists of multiple interconnected DAGs, each of which is responsible for processing a different type of transaction. This design enables the platform to process various types of transactions efficiently, including payments, data transfers, and smart contract executions.

## 3. Use Cases of COTI

Until now I believe that it has been established that COTI (Currency of the Internet) provides fast, scalable, and secure payment solutions.

As already mentioned on the section above, COTI's multiDAG (Directed Acyclic Graph) layer is the backbone of the platform, enabling it to process various types of transactions quickly and efficiently. The multiDAG layer consists of multiple interconnected DAGs, each responsible for processing a different type of transaction, including payments, data transfers, and smart contract executions.

One of the most significant advantages of COTI is its ability to support **microtransactions**. Microtransactions are small transactions, typically less than a dollar, that are often used in gaming, digital content, and other online services. COTI's platform can process microtransactions quickly and cheaply, making it an ideal solution for businesses that rely on these types of transactions.

COTI also offers **feeless transactions**, which means that users do not need to pay transaction fees when using the platform. This feature is beneficial for businesses that process a high volume of transactions and want to save on fees. If you are asking yourself **how do they prevent spam transactions** take a look at this [**article**](https://medium.com/@enschamp/how-does-coti-deal-with-common-attack-vectors-56ad10770239#:~:text=Spam%20Prevention,to%20send%20transactions.).

Another key feature of COTI is its **instant settlement** capability. This means that transactions on the platform are settled immediately, without the need for confirmation from other nodes. Instant settlement enables businesses to receive payments quickly and efficiently, without the risk of chargebacks or delays. **Trustchain** enables COTI to process up to 100,000 transactions per second, making it one of the fastest. blockchain platforms on the market.

COTI's platform can also be used in the **e-commerce industry**, where instant settlement and feeless transactions are essential. The platform's technology can enable businesses to process payments quickly and efficiently, while also saving on transaction fees.

## 4. Partnership with Cardano

In May 2021 **COTI and Cardano** announced a partnership aiming to develop a new payment solution by leveraging the strengths of both platforms. The primary goal of the partnership was to **create a bridge between the COTI and Cardano networks**, enabling users to transact seamlessly between the two platforms.

The partnership between COTI and Cardano combines the unique strengths of both platforms. COTI offers **fast and scalable payment processing**, with cutting-edge features such as **feeless transactions**, **instant settlement**, and **support for microtransactions**. Meanwhile, Cardano provides a **decentralized and secure infrastructure for building decentralized applications (dApps)** using a proof-of-stake consensus mechanism. Cardano also offers advanced features like **smart contracts and interoperability**, enabling seamless integration with other platforms. Together, the partnership is positioned to create a new payment solution that will offer fast, secure, and scalable transactions, while also fueling the growth of digital assets and decentralized finance (DeFi) solutions.

Leveraging these strengths, the COTI Cardano partnership is expected to develop a new payment solution that will enable users to transact seamlessly between the two networks. COTI will leverage Cardano's **scalability and interoperability** features to expand its payment solutions, while Cardano will tap into COTI's innovative features like **instant settlement and feeless transactions**. The partnership's success is expected to accelerate the adoption of blockchain technology and drive the growth of the broader blockchain ecosystem, opening up new opportunities for businesses and individuals alike.

The partnership has already created a new stablecoin called DJED. It aims to be a stable and transparent digital asset that can be used for transactions within the COTI and Cardano ecosystems. For more on this topic, read my other [**article**](https://hackmd.io/@Nald97/ryUy2skTs) where I take a deep dive into DJED stablecoin.

All in all, the COTI Cardano partnership is a significant development in the blockchain industry, as it brings together two leading platforms to create a new payment solution. It is expected to enable fast, secure, and scalable transactions while also facilitating the adoption of digital assets and decentralized finance (DeFi) solutions. The success of the partnership could pave the way for future collaborations between blockchain-based platforms and help to drive the growth of the broader blockchain ecosystem.

## 5. COTI's Roadmap for 2023

<sub>*Please find below a condensed version of COTI's [**roadmap Medium article**](https://medium.com/cotinetwork/coti-our-plans-for-2023-and-beyond-5de2e44e3c8e). For a more comprehensive understanding of the roadmap, we recommend visiting the [**original article**](https://medium.com/cotinetwork/coti-our-plans-for-2023-and-beyond-5de2e44e3c8e). Please note that some details may be excluded in this summary.*</sub>

---
COTI has an exciting **roadmap for 2023** with some significant improvements planned for its ecosystem. The platform has already launched the **DJED stablecoin** in early February, marking the first step on its ambitious roadmap. Moving forward, COTI plans to launch a new **Treasury governance token called $gCOTI**, followed by an upgrade to **Treasury 2.0**. COTI will also be fully implementing **COTIPay Business**, providing businesses with a comprehensive suite of payment solutions. The most significant milestone of the roadmap is upgrading the entire ecosystem to **COTI v2**, which promises to be the largest revamp since COTI's release in the mainnet in 2019. Lets take a brief look to these new features:

### 5.1. $gCOTI

**$gCOTI**, a Treasury governance token, will be launched with the aim of providing multiple benefits to **loyal COTI community members and Treasury contributors**. These benefits include governance participation, an APY booster, and participation in liquidation rewards. The $gCOTI token will be distributed at no cost to eligible community members, and the platform will release more details about the launch campaign soon.

### 5.2. Treasury 2.0

COTI's Treasury, which was launched in 2022, has been a massive success, attracting over 490 million $COTI tokens to date, accounting for more than 44% of COTI's circulating supply. COTI plans to further enhance the Treasury's capabilities with the introduction of **Treasury 2.0**, allowing for **new tokens to be deposited and locked**. To support sustainability and efficiently manage liquidity, COTI will introduce a new component to the Treasury ecosystem, the **Treasury Reserve Fund**, which will collect fees from all Treasury components and hold $COTI tokens. The **Stability Pool** will expand the Treasury's reach to other networks and incentivize **Stability Providers** with rewards in $gCOTI and $COTI tokens. $gCOTI holders will have the opportunity to participate in the liquidation process, benefiting from discounted $COTI. Finally, the Treasury will offer **token swaps** to users, adding more value to its participants and extending its reach to other network participants and token holders. These enhancements are poised to increase the value captured by the Treasury and open up new use cases for its participants.

### 5.3. COTI v2

COTI v2 is the next version of COTI, which will innovate on both the **tech stack level and the use case level**. The new version will be a Layer 1 that is compatible with multiple chains, offering **smart contracts** and a **programming language** that can expressively capture regulatory requirements. COTI aims to offer **building blocks** for those who wish to develop freely in a future that will most likely be regulated. To support its growth and usability, COTI has revisited its current emission schedule and adjusted it to include flexible and more **attractive rewards to node operators** over time. COTI v2 is expected to require **new tokenomics** that will support the growth and expansion of the new network. The team has pledged to release a **comprehensive whitepaper** within the year, providing in-depth information and details on the new developments.

## 6. Additional information

Relevant Links:
[**Official COTI Website**](https://coti.io/)
[**Official COTI Twitter Account**](https://twitter.com/COTInetwork?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)
[**Official COTI Medium Account**](https://medium.com/@cotinetwork)
[**Official COTI Github Account**](https://github.com/coti-io)
[**Official COTI YouTube Account**](https://www.youtube.com/@COTIGroup)


---
**D.**

**Disclaimer:** The content is for informational purposes only, may include the author’s personal opinion, and does not necessarily reflect the opinion of littlefish Foundation. Most of the information covered in this article was obtained from [**COTI Technical Whitepaper**](https://coti.io/files/COTI-technical-whitepaper.pdf) and was analyzed independently.










