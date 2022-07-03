#fund9 

## Please provide a detailed plan, including timeline and key milestones for delivering your proposal.
[[Workload Management]]

**Roadmap**

The proposal is to fund 6 months of developing Actions: September through February 2023. The proposal roadmap is divided into three stages. Stages 1 and 2 output feature complete versions of Actions. Actions will be used on the testnet and possibly on the mainnet to test and collect feedback from pilot use cases. 

  

Stage 3 begins work on the broader vision, including features that will be further specified through the process. It aims to get Actions ready for the future, with a larger toolset available to work within the LFF ecosystem. Stage 3 relates to another LFF proposal, where we employ token engineering principles to build reward sharing agreements that are sustainable. 

  

**Stage 1: Action MVP**

1 month - September 2022

  

The early goal with Actions is to have good support for different types of media. Actions, in order to represent real world activities well, must support arbitrary combinations of data links: images, videos, GIFs, documents, … Multiple of the same media types should be supported. An Action can be made up of 5 photos, 2 videos, 1 PDF document for example. This will allow a variety of activities to be well captured by Actions.

  

To build the Action MVP:

1.  Group: Define the metadata specification
2.  Group: Choose libraries for building transactions
3.  Backend - Developer(s): Implement transaction building (using library(s) defined in (2))
4.  Frontend - Developer(s): Build UI for selection/population of metadata fields on Action minting, integrating (3)

  

This stage will result in a functional Action NFT specification with the said functionality and a minting contract to mint Actions.

  

**Stage 2: Extensibility** 

3 months - October/December 2022

  

Extensibility unlocks many things. It allows Actions to represent any activity. Initially, this is for LFF to define new types of Action. For example, a colony membership extension would turn an Action into a membership badge for a colony. This allows Actions to be the primitives of LFF and enables the other stages.

  

This stage will result in an extensible metadata specification that allows third party metadata. With this functionality we will create the first example: an Action for becoming a colony member.

  

To build extensibility:

1.  Group: Define extensibility in metadata specification
2.  Backend - Developer(s): Update transaction building to support extensibility
3.  Frontend - Developer(s): Update UI for extensibility 
4.  Test extensibility through real world use
5.  Iterate 1 through 4

  

This stage will result in a functional Action NFT specification with the said functionality and a minting contract to mint Actions.

  

**Stage 3: The Next Steps (Bootstrapping a Community of Contributors)**

2 months - January/February 2023

  

With extensibility, the metadata can have parameters that work with specific smart contracts. These interactions make up the LFF ecosystem together. Some of these parameters we look to implement are:

-   Reward Sharing Agreements: RSAs are [digital business agreements](https://publish.obsidian.md/littlefish-foundation/A.+Whitepaper/D.+Technology%26Philosophy/The+Attributes+of+Action#Digital%20Business%20Contracts). Each littlefish involved in an Action gains rewards according to it and according to their participation. Colony members earn, Action producers earn, colony earns, etc. This must be implemented in the sales contract but the Action metadata will include this information for the sales contract to use.
-   Reward Aging: Reward sharing rate decays at a rate set by the decay coefficient for each involved party. This will incentivize further Action by all participants. If littlefish doesn't provide further value, they stop earning.
-   [[Action Technical Specification|And more...]]


### Modules
[[Modules|How we make work visible: Modules]]
![[Shaping Action - Modules]]

## Please provide a detailed budget breakdown.
[[Shaping Action - Budget]]

## Please provide details of the people who will work on the project.

**Cem** - I completed a Master's degree in Electrical & Electronics Engineering. My thesis was about to create a complete Video on Demand system with client-server architecture with its own network protocol called Reliable UDP. After graduating, I set up a high-security financial data center in 2004. Then, in 2019, I started a new cyber security startup with three of my staff. The same year, the startup was funded by the largest bank in Turkey. 

  

I started programming when I was 12 years old, and about 6 years later, I met the Internet, which introduced so many things to me. Open source was the biggest among them. Later on, I wrote a book about Linux and open-source systems. For me, open-source philosophy was the key to real human potential. It was making the secrets of the institutions public. 

  

In the corrupt financial system we are used to living in, a person or group named Satoshi designed the decentralized digital currency called Bitcoin. And afterward, new techniques that were not part of our current order began to develop. Then, in 2021, I met Cardano, where like-minded people find each other. So when I dig deeper into Cardano, I suddenly found myself in the Cardano4Climate community trying to do things to stop climate change with a bunch of people all around the world. 

  

With friends from Cardano4Climate, we formed up littlefish Foundation. It is a system, a reason for being. Encourage people to do anything for the good of the common. It is an experiment to build collective intelligence. 

  

Now, I decided to retire from all of my real-world business to solely think, dream and work for the littlefish Foundation.

  

[https://www.linkedin.com/in/ckaraca/](https://www.linkedin.com/in/ckaraca/)

[https://github.com/ckaraca](https://github.com/ckaraca)

  

Proposal Focus: All modules. Work on specification design, project management and work on all development aspects of the proposal. Help shape PBL module. 

  

**ChaKhan** - 3+ years experience as a Backend Developer. Python, REST, Postgres, data modeling. Electrical and Electronics Engineering Major. Found Ikigai working on LFF, thinking/working on it 24/7. MBA Thesis in progress on the LFF, focus is pricing Actions in the context of LFF payments. Learning within the Catalyst/Cardano ecosystem for 7+ months. Focusing on organization building, governance, token engineering with long term interest in economics, game theory, behavioral psychology, political science, and history.

  

[https://www.linkedin.com/in/%C3%A7a%C4%9Fkan-acarbay-b2210b136/](https://www.linkedin.com/in/%C3%A7a%C4%9Fkan-acarbay-b2210b136/)

[https://github.com/cagkanacarbay/](https://github.com/cagkanacarbay/)

  

Proposal Focus: Modules 1, 2, 4, and 5. Work on specification design, off-chain development, run experiments, collect data, help shape PBL module.

  

**James Dunseith** - Co-founder of Gimbalabs, funded Catalyst proposer, contributor to projects across the Catalyst ecosystem, and currently leading the development of Plutus Project-Based Learning initiatives at Gimbalabs. Prior to committing full-time to Cardano and Catalyst development, James taught high-school math and developed teacher-education programs at two ed-tech startups. 

  

Proposal Focus: All modules. Minting contract development. Advisor on all things Plutus.

  

**Nori Nishigaya** - Founder of the Salmon Nation Decentralized Alliance (SANADA), and co founder of Bridge Builders, and SAMON pool. Member of the Catalyst Circle Admin Team, Cardano4Climate, and Littlefish Foundation. Cardano Ambassador, CA, and Funded proposer. Passionate about radical inclusivity and community, and devoted to making Cardano the best community on the planet. Nori brings over 30 years of experience in software development, agile methodologies, leadership and managing teams, and founding and running technology startups.

Proposal Focus: Module 1. Metadata design.

  

**Mert Akyazi -** 2+ years Software Developer experience on Back-End and 1+ years experience on Blockchain development, mostly on EVM compatible networks. Currently working with a close to launch NFT marketplace “LEXIT” as Chief Cryptographer

[**https://www.linkedin.com/in/mertakyazi/**](https://www.linkedin.com/in/mertakyazi/)

Proposal Focus: Module 1. Specification design and research.

  

**Sebastian Pereira -** 5+ years of strategic planning for public institutions as an Economist. 2 years in the blockchain industry EMURGO Academy instructor, content writer for EMURGO Blog and CT team leader. 

[https://www.linkedin.com/in/sebastianpereira33/](https://www.linkedin.com/in/sebastianpereira33/)

  

Proposal Focus: Module 1. Specification design and research.

  

**Donald Isufi -** Electrical and Electronics Engineering Major Senior Year, Self-taught programmer, JavaScript, React, Python, HTML and CSS, 1 year experience as Front-End Developer. Recipient of MITx Certificate for Introduction to Computational Thinking and Data Science. Blockchain enthusiast and participant of Little Fish Foundation for 1+ month. 

  

[https://www.linkedin.com/in/donaldisufi/](https://www.linkedin.com/in/donaldisufi/)

[https://courses.edx.org/certificates/39a936e9f5454dac823297795d81b9c1](https://courses.edx.org/certificates/39a936e9f5454dac823297795d81b9c1)

  

Proposal Focus: Module 3. Frontend development. Module 2. Off-chain development.

**Emre Kurt** - B.Sc. in Geological Engineering with 4 years job experience in the field. Working as a System Administrator for the last 3 years and Sales Director for the last 1.5 years. Very good knowledge of Linux based systems and Network Security. In the process of excelling in the blockchain technology and currently focusing on organization and community building, marketing strategies. Also using AI tools to create art pieces to be minted as NFTs.

  

[https://www.linkedin.com/in/emre-kurt-617272bb/](https://www.linkedin.com/in/emre-kurt-617272bb/)

[https://creator.nightcafe.studio/u/Nautilus](https://creator.nightcafe.studio/u/Nautilus)

  

Proposal Focus: Module 4. Internal use, collecting information, documenting processes.

**Getting involved with Littlefish Foundation**

LFF is an open community. We accept community members who show initiative to join us in delivering these proposals. The only condition is curiosity. If you find something you like, let us know on our Discord server, join our community meetings, and ask questions. 

But first, it’s [[Littlefish Vault|good to learn]].

## If you are funded, will you return to Catalyst in a later round for further funding? Please explain why / why not.
[[Will littlefish return to Catalyst?]]