## General
### Problem statement
In decentralized work, visibility to contributions is low, information doesn’t spread effectively. Action doesn’t align with common goals.

### Summarize your solution to the problem.
A complete platform that enables decentralized communities, starting with specifying, testing, and implementing the basic building block of decentralized work: the Action NFT.

## Impact
### Please describe your proposed solution.*
Actions are the basic blocks in Littlefish Foundation. They are the NFTs, Proofs of Activity, that can be made to represent any activity in the real world. This is a rather broad definition that must be specified, designed, tested, and implemented.

To make it concrete, the first step is to define the metadata. There are many ways this can be done with each having cascading consequences that must be understood, tested for, and decided upon. The definition process must take into account updateability and interoperability.

In classical software systems, definitions of data evolve over time according to changing business demands. New data fields can be added, old ones changed or deleted. With NFTs (if not accounted for) data can't be updated. Actions will stay the same. Newer versions may have new information but this introduces an interoperability constraint. All clients that use this type of NFT would have to extend their support for it. This may become an untenable problem for 3rd party applications that want to use Actions.

Hence the design process must account for this dichotomy. Our approach to solve this problem is to define Action incrementally with experimental steps. On the way, we'll be working with other Catalyst communities (other colonies), discussing their use cases for Actions, generalizing to the needs of decentralized communities. The pioneers of crypto-native organizations. They will be the first users of Actions, along with LFF, [the first colony](https://publish.obsidian.md/littlefish-foundation/A.+Whitepaper/C.+Organization/The+First+Colony).
### Please describe how your proposed solution will address the challenge?*
Littlefish Foundation is an original crypto native idea. It is an attempt to redefine existing earning relationships and replace it with a model that serves the people. Actions are at the heart of that.

Actions provide a new, **meaningful use case for NFTs.** They are a [[The Attributes of Action|new primitive]] for web3. A broad, inclusive metadata definition that takes into account extensibility and flexibility will allow **new business models** based on reward sharing to emerge. It will also allow public/common goods to be valued through community funding.

This is what blockchains are meant to enable. Valuing what could not be valued before. Incentivizing publicly beneficial Actions through mechanism design. Actions will enrich the ecosystem like no existing current system can.

### What main challenges or risks do you foresee to deliver this project successfully?*
Littlefish Foundation is a complex organization driven by individual efforts. It only moves forward if individuals drive it forward. The single biggest risk in front of that is financial. A large part of the current team is based in Turkey, which has been experiencing hyperinflation for the past year. 

Funding is the number one challenge we face. With funding we can pay the team to work on Littlefish Foundation and make their financial burden lighter. This all puts us closer to achieving the LFF vision. We are a global community with contributors from all over the world. Without funding, we will still build the LFF, but it will be more challenging and slower.

## Feasibility
### Please provide a detailed plan and timeline for delivering the solution.*
To start we have created an [informal specification](https://publish.obsidian.md/littlefish-foundation/Action+Technical+Specification). This is an evolving document, bound to change with new findings and experimentation. It is to give a general, long term vision of Actions, designed both to spark discussion and to prioritize functional experimentation.

This proposal aims to fund 6 months of developing Actions. The proposal roadmap is divided into three stages. Stages 1 and 2 output feature complete versions that can be used on the mainnet. Stage 3 is the broader vision, including multiple features that will be further specified through the process.

**Stage 1: Action MVP**

1 month - August 2022

The early goal with Actions is to have good support for different types of media. Actions, in order to represent real world activities well, must support arbitrary combinations of data links: images, videos, GIFs, documents, … Multiple of the same media types should be supported. An Action can be made up of 5 photos, 2 videos, 1 PDF document for example. This will allow a variety of activities to be well captured by Actions.

**Stage 2: Extensibility**

3 months - September/November 2022

Extensibility unlocks many things. It allows Actions to represent any activity. Initially, this is for LFF to define new types of Action. For example, a colony membership extension would turn an Action into a membership badge for a colony. This allows Actions to be the primitives of LFF and enables the other stages.

**Stage 3: The Next Steps**

2 months - December 2022 to January 2023

-   Reward Sharing Agreements: RSAs are [digital business agreements](https://publish.obsidian.md/littlefish-foundation/A.+Whitepaper/D.+Technology%26Philosophy/The+Attributes+of+Action#Digital%20Business%20Contracts). Each littlefish involved in an Action is gain rewards according to it and according to their participation. Colony members earn, Action producers earn, colony earns, etc. This must be implemented in the sales contract but the Action metadata will include this information for the sales contract to use.
-   Reward Aging: Reward sharing rate decays at a rate set by the decay coefficient for each involved party. This will incentivize further Action by all participants. If littlefish doesn't provide further value, they stop earning.
-   Action Groups: Actions that are made up of multiple previously generated Actions 
-   Action groups allow Actions representing smaller activities to be represented within a greater whole.
-   [And more](https://publish.obsidian.md/littlefish-foundation/Action+Technical+Specification)...

### Please provide a detailed budget breakdown.*
These are the main activities for this proposal:
- Metadata specification research
- Work on technical specifications
- Design of metadata to fit specifications
- Development of the minting contract
- Deployments to testnet
- Development of test clients to interact with Actions
- Analysis of Action data models on testnet
- Documentation of research, models, updates in work
- Iteration


All Littlefish Foundation proposals contribute TBD% of their budget to the Action Fund. The Action Fund's purpose is to buy Actions, generating ready demand for them, rewarding contributors to the Littlefish Foundation, incentivizing them further to contribute. 

This is the [[Littlefish Action Model]] at work. For a full explanation see [[Action Fund]]. 

Budget details to come...
  
### Please provide details of your team members required to complete the project.*
Collecting team information…

### If you are funded, will you return to Catalyst in a later round for further funding? Please explain why / why not.
Yes, we will return to Catalyst for further funding, until we build sustainable business models around Action.

We are an evolving decentralized organization. We expect solid community and contributor growth in the near future. These individuals, along with existing ones who have time from existing commitments, will be starting new initiatives. Until we get to a sustainable business model using Actions, Catalyst will be the place where we come for funding. This allows us to experiment until we can figure our way. Thanks Catalyst!

Meanwhile, we will be providing Catalyst and the broader community with ongoing services. We will be publishing all our research (DAOs, governance, economic, technology, tools, ...) on the [Littlefish Vault](https://publish.obsidian.md/littlefish-foundation/B.+Project+Catalyst/Fund+9/Fund+9+Start+Here). These will be made sustainable through experiments in Action, in due time.

## Auditability
### Please describe how you will measure the progress and the development of the project?*
At Littlefish Foundation, everything we do is public, and we like documentation. We will publish major progress updates on Obsidian, sharing our learning with the broader community. Our Miro boards are open to the community, there they can see our progress, comment, and contribute. We also share our Actions on Discord, that will be the best place to find daily updates.

The general success of LFF is dependent on the community. We will track it mainly on Obsidian using Google Analytics.

The success of this specific proposal will be dependent on tangible progress on our activities. 

Details on the way…

### What does success for this project look like?*
**LFF General - Solving our own problems through experimentation, building applications the community loves**

Our approach to problem solving in this space is experimentation. Trying out new methods of doing business, creating new processes fit for a decentralized organization built from the ground floor.

One example is our Ikigai onboarding model. The bubbles at the top represent work groups and business functions. We walk through the bubbles with newcomers, discussing what they mean in Littlefish Foundation, and ask them to fill their Ikigai board with them. The result is a fun learning experience for everyone.

![[Pasted image 20220609162221.png]]

We create such systems with the aim of turning them into software. First we practice with existing tools, learn, iterate, and experiment, then we'll build it into software that others can use.

Some other experiments relating to publishing Actions by:
-   Financial tracking of [rewards](https://docs.google.com/spreadsheets/d/11rj_nNfQg98ePy3_2pp7YkiZc0WV47Dd-AgUf20fNZI/edit?usp=sharing)
-   Actions published on [#action](https://discord.gg/K4ZzcAPM) Discord channel,
-   Older Actions published on the [Adventures of Littlefish](https://miro.com/app/board/uXjVOPNZgXQ=/?share_link_id=407306684536)

Success means these experiments turn into learning which turn into applications loved by the community.

**LFF General - A strong community of creators and builders**
We are a growing community of 100+. Yet pure numbers aren't enough. Growing the number of meaningful contributors is the key to long term success. Since the F8 proposal, the number of consistent contributors has grown from 2 to 10+ and growing fast. Newcomer numbers are also ticking up. Maintaining a sustainable, healthy growth in these numbers is critical. 

**This Proposal - Actions are live on the mainnet, and are being used by colonies**
Once live, we imagine Actions being generated by many colonies, starting with LFF and adding other interested decentralized communities as colonies. We can't wait to see how Actions will be used by others.

**This Proposal - Actions are extensible, communities can easily add their own information**
Extensible Actions will bring flexibility to the system, allowing Actions to truly represent any activity that can be taken by individuals. Colonies will be able to represent data specific to themselves. Again, can’t wait!

### Please provide information on whether this proposal is a continuation of a previously funded project in Catalyst or an entirely new one.*
This is the continuation of a previously funded project at F8: [https://cardano.ideascale.com/c/idea/404668](https://cardano.ideascale.com/c/idea/404668)

Currently we're working on implementing the most basic version of our platform, as outlined in the funded proposal. We were relatively new to developing on Cardano and found a steep learning curve. Weak documentation slowed our development down, but during this time we have completed many important steps:
-   Finished the [whitepaper](https://docs.google.com/document/d/1U_RIQxkM4DW2_J8mF8_spJzs8HbJH1PusJNK4b_ix8k/edit?usp=sharing)-   Tech Help Collective - Working on wallet research&documentation, preliminary DAO tools research on Ethereum and Cardano, reworking Littlefish Discord
	-   Love House - the littlefish AI art collection
	-   Organization Labs - Research on Teal organizations, determined necessary business functions, created organizational model
	-   The Forge - Tested out serialization library, lucid, and multiplatform library, created early UI/UX designs
	-   Dream Engine - Created Littlefish Action Model, User Flow Models, Detailed Action Flow, Organization Funding Model, and more
-   Built a strong core of contributors from our community
-   Created an organizational model to fit our needs
-   [A Radical Method of Organization](https://publish.obsidian.md/littlefish-foundation/A.+Whitepaper/C.+Organization/A+Radical+Method+of+Organization)
-   [Why Cardano > Proposals Experiments and Teams](https://publish.obsidian.md/littlefish-foundation/A.+Whitepaper/D.+Technology%26Philosophy/Why+Cardano#Proposals%20Experiments%20and%20Teams)
-   Formed work groups and started to produce on all of them. See these on the [Action Board](https://miro.com/app/board/uXjVO7oL1M4=/?share_link_id=790505909394)
	-   Tech Help Collective - Working on wallet research&documentation, preliminary DAO tools research on Ethereum and Cardano, reworking Littlefish Discord
	-   Love House - the littlefish AI art collection
	-   Organization Labs - Research on Teal organizations, determined necessary business functions, created organizational model
	-   The Forge - Tested out serialization library, lucid, and multiplatform library, created early UI/UX designs
	-   Dream Engine - Created Littlefish Action Model, User Flow Models, Detailed Action Flow, Organization Funding Model, and more

Here's a shot of that board as of the 10th June:
![[10thjunemiro.png]]