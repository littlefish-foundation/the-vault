![[nami.svg]]
# Nami Wallet
Nami is an open-source browser based multi-functional, non-custodial wallet extension.
Browser extensions are available on their main page https://namiwallet.io/.
* https://github.com/Berry-Pool/nami-wallet
## Availability
It is explicitly available for below browsers as denoted in the front page of their website.
* Chrome
* Brave
* Edge
They have also noted that it is available on any other chrome-based browser.
Here, **no support** for **Firefox** seems to be a weak point.
## Features
To be able to test the features, we have used below faucet and changed network to "Testnet"
> https://testnets.cardano.org/en/testnets/cardano/tools/faucet/
* It can be injected to the browser context such as Metamask. Therefore, can be connected to dApps in websites. 
* Sends and stores multiple assets such as Tokens/Coins and NFTs
* Able to mint tokens/NFTs
* Supports multi-signature transactions
* According to their website, support for "Smart Contracts" will be added when **available**? 
## Compatibility
### Hardware Wallets (Cold Wallets)
* Can be connected to hardware wallets. (Trezor and Ledger)![[nami_hardwarewallet_connectionpage.png]]
### Software Wallets (Hot Wallets)
Nami supports 15 and 24 word seed phrases. Only **one** seed phrase can be imported to Nami but multiple sub-accounts, independent from each other, can be created.

Since Nami creates sub-accounts from a single seed phrase, *only the first adress is visible when it is imported again in any other instance or Daedalus/Yoroi. Sub-accoounts will be hidden.* Because of this, there might be problems showing the correct amount of assets you own. Thus, **it is not recommended to use Nami and Daedalus/Yoroi simultaneously, clearly stated in their website.**
## Staking
It is possible to stake/delegate your ADA to external pools **only the pool that you want to stake supports integration to Nami extension**. (You can refer to https://pool.pm for detailed information on stake pools and manual integration)
Using the sub-account feature of Nami you can delegate assets in different accounts to different pools.

In the extension itself, the pool **only** option to stake is Berry Pool, which is the official pool of Nami.
There is a "Delegate" button on the extension's front page (not available in Testnet) that you can use to stake your assets in Berry Pool;
![[nami_stake_1.png]]
![[nami_stake_2.png]]
After confirming on this page, you will be paying a refundable fee to be able to delegate your assets. Afterwards, you can set the amount of assets you want to stake. 
* https://berrypool.io/

## Voting 
Nami does not have voting feature. But there is a Catalyst proposal for FUND9 to enable voting. Details here: https://cardano.ideascale.com/c/idea/366752

## Collateral

It is kind of an insurance for smart contract execution scenarios, which don't run successfully. Unlike regular transactions that are validated in phase 1, smart contracts (Plutus validators) are validated in phase 2. Here, in the event of  failure of transaction, a "collateral" is taken to cover the resources used by the validator node.
Therefore, there is a fixed 5 ADA collateral fee to prevent bad actors from spamming the network,  poorly constructed dApps and such.

![[nami_collateral_1.png]]

Please note that, you have to enable Collateral for each account separately in your Nami Wallet.

Most of the DeFi dApps require Collateral to be set to some value, otherwise you may get errors while swapping your tokens. Up to 10 ADA is enough for most of the dApps. Smart contracts will consume the required collateral amount and will return the remaining collateral regardless of the amount you set in Collateral settings.