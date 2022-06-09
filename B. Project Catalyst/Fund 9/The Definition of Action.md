## Impact
### Please describe your proposed solution.*
Actions are the basic blocks in Littlefish Foundation. They are the NFTs, the Proofs of Action, that can be made to represent any activity in the real world. This is a rather broad definition that must be specified, designed, tested, and implemented. 

To make it concrete, the first step is to define the metadata. There are many ways this can be done with each having cascading consequences that must be understood, tested for, and decided upon. The definition process must take into account updateability and interoperability.

In classical software systems, definitions of data evolve over time according to changing business demands. New data fields can be added, old ones changed or deleted. With NFTs (if not accounted for) data can't be updated. An Action, once generated will stay the same. Newer versions may have new information but this introduces an interoperability constraint. All clients that use this type of NFT would have to extend their support for it. This may become an untenable problem for 3rd party applications that want to use Actions. 

Hence the design process must account for this dichotomy. Our approach to solve this problem is to define Action incrementally with experimental steps. This proposal aims to tackle this problem through collaboration with developers in the Littlefish Foundation, and the broader Catalyst community. 

### Please describe how your proposed solution will address the challenge?*
Littlefish Foundation is an original crypto native idea. It is an attempt to redefine existing earning relationships and replace it with a model that serves the people. Actions lie at the heart of that. 

Actions provide a new, meaningful use case for NFTs. They are a new primitive for web3. A broad, inclusive metadata definition that takes into account extensibility and flexibility will allow new business models based on reward sharing to emerge. It will also allow public/common goods to be valued through community funding. This is what blockchains are meant to enable. Valuing what could not be valued before. Incentivizing publicly beneficial Actions through mechanims design. Actions will enrich the ecosystem like no other existing system can.

### What main challenges or risks do you foresee to deliver this project successfully?*
Littlefish Foundation is a complex organization, made up of individual efforts by the members of its community. The most critical challenge at this early stage is not getting the contributions from a large number of community members. We are an ambitious bunch. We aim high and strive to achieve the goals we set for ourselves. 

## Feasibility

### Please provide a detailed plan and timeline for delivering the solution.*
To start we have created an [[Action Technical Specification|informal specification]]. This is an evolving document, bound to change with new findings and experimentation. It is to give a general, long term vision of Actions, designed both to spark discussion and to prioritize features.

This proposal aims to fund 6 months of developing Actions. The funding will be used to further develop and formalize the specification as well as to implement it. The proposal roadmap is divided into three stages. Stages 1 and 2 are meant to be feature complete versions that can be used on the mainnet. Stage 3 includes the broader vision and the design specifics will be made 

**Stage 1: Action MVP**
The early goal with Actions is to have good support for different types of media. Actions, in order to represent real world activities well, must support arbitrary combinations of data links: images, videos, GIFs, documents, … Multiple of the same media types should be supported. An Action can be made up of 5 photos, 2 videos, 1 PDF document for example. This will allow a variety of activities to be well captured by Actions.

**Stage 2: Extensibility**
Extensibility unlocks many things. It allows Actions to represent any activity. Initially, this is for LFF to define new types of Action. For example, a colony membership extension would turn an Action into a membership badge for a colony. This allows Actions to be the primitives of LFF and enables the other stages.

**Stage 3: The Next Steps**
- Reward Sharing Agreements: RSAs are [[The Attributes of Action#Digital Business Contracts|digital business agreements]]. Each littlefish involved in an Action is gain rewards according to it and according to their participation. Colony members earn, Action producers earn, colony earns, etc. This must be implemented in the sales contract but the Action metadata will include this information for the sales contract to use.
- Reward Aging: Reward sharing rate decays at a rate set by the decay coefficient for each involved party. This will incentivize further Action by all participants. If littlefish doesn't provide further value, they stop earning.
- Action Groups: Actions that are made up of multiple previously generated Actions 
	- Action groups allow Actions representing smaller activities to be represented within a greater whole.
- [[Action Technical Specification|And more]]... 

### Please provide a detailed budget breakdown.*

  
  
### Please provide details of your team members required to complete the project.*


## Auditability
### Please describe how you will measure the progress and the development of the project?*


### What does success for this project look like?*
  

### Please provide information on whether this proposal is a continuation of a previously funded project in Catalyst or an entirely new one.*