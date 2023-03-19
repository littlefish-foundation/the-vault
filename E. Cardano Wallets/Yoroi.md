#THC #wallet

**Review on :** 9 March 2023

![[yoroi.svg|center|200]]
# Yoroi
Yoroi is an open-source, multi-functional, platform-rich, hierarchical deterministic (HD) and light-wallet extension and mobile app developed by Emurgo (IOG).
> https://github.com/Emurgo/yoroi-frontend
> https://github.com/Emurgo/yoroi-mobile
> https://emurgo.io/
## Availability
It is available on many devices/endpoints;
* Chrome (and chrome-based)
* Firefox
* Edge
* Android
* iOS
It is also available in many languages; English, Japanese, Korean, Chinese(Simplified), Chinese(Traditional), Russian, German, French, Dutch, Portuguese, Spanish, Italian, Malay, Turkish, Czech, Slovakian.
## Features
* Yoroi offers you below options upon launching the app after selecting your language, accepting Terms of Use and Cardano Payment URL preference;
![[yoroi_setup_4.png]]
* You can create and restore wallets in either Cardano (ADA) or Ergo (ERG, which is exclusive to Yoroi wallet).
	* Yoroi supports multiple wallets in both networks.
* Under "Claim/Transfer" menu, it is possible to transfer ADA earnings from Byron and Shelley-era wallets, with many options depending on which era wallet you are going to use. Byron-era wallets include Legacy Daedalus wallets and Icarus/Yoroi wallets with following options respectively; 12-word, paper and master key of Daedalus wallets, 15-word and Legacy Yoroi paper wallets.
![[yoroi_claimtransfer.png|150]] ![[yoroi_claimtransfer_byronera_legacydaedalus.png|150]] ![[yoroi_claimtransfer_byronera_icarusyoroi.png|200]] ![[yoroi_claimtransfer_shelleyera.png|150]]
* It is possible to connect to dApps with Yoroi and you can see connected apps under extension "Dapp connector" tab

## Compatibility
### Hardware Wallets (Cold Wallets)
* Yoroi can connect to Cardano hardware wallets Ledger and Trezor;
![[yoroi_setup_4_connect-hardware.png|center|250]]
### Software Wallets (Hot Wallets)
* When creating a new wallet only 15-word phrase is available.
	* Make sure that you write down new wallet's words in respective order since the app is going to ask them for confirmation
	* There will be a "spending password" embedded to your extension/app which you will determine. Losing the password only means you won't be able to make transactions on that instance. Deleting the extension/mobile app and restoring with your 15-word recovery phrase will be able to restore your wallet(s).
* Multi-signature and multi asset transaction is available.
* Yoroi supports restoring wallets with 15-word and 24-word recovery phrases and also **paper** wallets
![[yoroi_setup_4_restore-adawallet.png|center|250]]
* For importing Ergo, it supports 12-word, 15-word and 24-word recovery phrases
![[yoroi_setup_4_restore-ergowallet.png|center|250]]
## Staking
"Delegation List" tab in the extension offers extensive pool search ability and delegation is simple enough. It is possible to delegate to different pools with different wallets (multi-delegation). 
![[yoroi_staking.png|center|450]]
 
## Voting 
Yoroi embraces voting. However, at the time of documentation, we were out of the voting period (and it also requres minimum 500 ADA).
![[yoroi_voting_out.png]]

## Additional Notes
#### Security
Private keys of wallets are stored in user's device and not shared with 3rd party servers or Emurgo itself.
### Enabling Cardano Payment URLs
You can enable this feature under "Settings > Blockchain";
![[yoroi_blockchain_ecpURLs.png]]
#### Logs
You can download logs of your account which excludes sensitive information under "Settings > Support/Logs" with the option of including public key of your wallet in ".log" file format.
![[yoroi_logs.png|400]] ![[yoroi_logs-wtkey.png|250]]
#### Layout 
It is possible to change complexity level of the extension interface under "Settings > Level of Complexity"
![[yoroi_lox.png|center|350]]
#### Privacy
Below details are specifically denoted under Terms of Use, which is good to know
>**Terms of Use**
>Yoroi will...
>-   **Never** track your behavior.
>-   **Never** create profiles with your information.
>-   **Never** sell your data.
>-   **Never** run any analytics software or 3rd party trackers.
Any server log is kept for at most 2 weeks purely for server troubleshooting purposes.
#### Contact Us Applet
There is a ZenDesk applet inside Yoroi browser app where you can contact Yoroi team with queries;
![[yoroi_contactus-applet.png||250]]

## Known Issues
* Transaction stuck at submitted: https://forum.cardano.org/t/yoroi-transaction-suck-at-submitted/93804