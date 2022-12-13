#THC #Discord 

![[Pasted image 20221024171337.png]]


Hazelnet bot allows users to integrate their Cardano wallet into discord. Thanks to this integration, communities can manage voting and staking operations via discord and categorize users with roles according to their transactions.

**! Hazelnet bot is in open beta for now, not officially released yet**




## 1. Installation

The installation process is very simple, just call the bot to desired discord server from Hazelnet's website.

https://www.hazelnet.io/invitebot

After the invite run "/start" command for basic installation.

![[Pasted image 20221019135210.png]]
![[Pasted image 20221019135308.png]]


## 2. Features




**-  Secure and private  verification of addresses for  wallets, via “transaction-to-self”**

![[Pasted image 20221024173125.png]]

![[Pasted image 20221024173243.png]]





**- Scam-protection features**

A feature that can be used to directly block or quarantine wallet addresses shared in channels.

https://www.hazelnet.io/documentation/configure-protection-status





**-  Adding official stakepools for your Discord server** ( Black Edition)

Allows admins to add stakepools to their server with Pool ID

![[Pasted image 20221024174138.png]]

https://www.hazelnet.io/documentation/configure-stakepool-add




**- Create and manage polls in Discord** ( Black Edition )

Allows community managers to set polls in Discord. Time and date range can be set for these polls to be created.


https://www.hazelnet.io/documentation/configure-poll-add

![[Pasted image 20221024175022.png]]


Apart from its traditional use, polls can be also used creatively.

A post on twitter by Hazelnet user

![[Pasted image 20221024175112.png]]





**- Automatic role assignments for delegators of designated stakepools , fungible token and NFT holders.**

**Delegation;**

![[Pasted image 20221024175327.png]]


**NFT;**

Customize roles with metadata when creating roles for NFT owners

https://www.hazelnet.io/documentation/configure-tokenroles-metadatafilter-add
https://www.hazelnet.io/tutorials

Example usage; To create roles based on how many NFT's they hold

/configure-tokenroles add policy-id d5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc role @DesertTiger count 1



**-   Whitelist signup with required roles, start/end dates, and user limits, that can be accessed by your dev team securely via REST API** ( Black Edition )

Normally, no one, including administrators, can see the addresses that are integrated using Hazelnet bot. It has been designed in this way for user privacy.
  
If managers need to reach addresses for some purposes, a whitelist must be created to obtain the address codes of the users. The addresses of the users who join the white list voluntarily will be visible to the dev team with the REST API.





## 3. Additional Notes


Black Edition: 

The version of Hazelnet that includes the premium features it offers to its users.
You can have premium features by delegating ADA to HAZEL.

![[Pasted image 20221024182155.png]]

![[Pasted image 20221024182217.png]]




Currently, the bot is managed with commands applied from discord, but a web panel can be added for management in the future.


Last but not least, All commands and explanations about usage are available on their website.
https://www.hazelnet.io/documentation



