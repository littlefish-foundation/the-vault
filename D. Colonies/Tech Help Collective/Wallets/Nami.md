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

* Can be connected to hardware wallets. (Trezor and Ledger)![[nami_hardwarewallet_connectionpage.png]]
* It can be injected to the browser context such as Metamask. Therefore, can be connected to dApps in websites. 
*Sends and stores multiple assets
Mint tokens
Multi signature*
* According to their website, support for "Smart Contracts" will be added when **available**? 
## Compatibility
### Hardware Wallets (Cold Wallets)
### Software Wallets (Hot Wallets)
Nami supports 15 and 24 word seed phrases. Only **one** seed phrase can be imported to Nami but multiple sub-accounts, independent from each other, can be created.

Since Nami creates sub-accounts from a single seed phrase, *only the first adress is visible when it is imported again in any other instance or Daedalus/Yoroi. Sub-accoounts will be hidden.* Because of this, there might be problems showing the correct amount of assets you own.

**It is not recommended to use Nami and Daedalus/Yoroi simultaneously, clearly stated in their website.**
## Staking
It is possible to stake/delegate your ADA to external pools.
Using the sub-account feature of Nami you can delegate assets in different accounts to different pools.

Nami's official pool is Berry.
* https://berrypool.io/
## Voting
## Collateral
There is a fixed 5 ADA collateral fee to prevent bad actors from spamming the network,  poorly constructed dApps and such.

**WILL BE EXPLAINED IN DETAIL**