#module #fund9  


**Module 1: Token Engineering Learning Cohort**
Stakeholders: LFF, Catalyst community members
Primary Work Group: [[Dream Engine]]
Duration: July 2022 - February 2023
Resources: 150 hrs + module operations budget 

  

Token engineering is a complex field. A broad baseline for knowledge is necessary to grasp the complexity of token economies. Economics, game theory, ethics, computer science, optimization, governance all come into play. First, we need to learn, and teach each other the necessary skills.

  

This is **serious expert level learning**. The participants will be asked to commit after a trial period. The learning cohort will be open to everyone who wants to join in. 

  

Through this stage, we will build the team to work on the R&D.

  

Activities:

-   Gather individuals with interest into a learning cohort
-   Take the [Token Engineering Fundamentals](https://tokenengineeringcommunity.github.io/website/docs/academy-welcome/#token-engineering-fundamentals) course as a cohort. Details [here](https://medium.com/tokenengineering/token-engineering-fundamentals-49b15b42fa5).
-   Weekly study sessions on covered and other related topics,
-   Take [cadcad course](https://www.cadcad.education/course/bootcamp) with interested developers,
-   Identify cadcad [use cases](https://www.cadcad.education/path-player?courseid=bootcamp&unit=5fa21575ef15a442816d7bd9Unit) to study, then study together, 
-   Weekly cadcad workshops we learn together,
-   Build R&D team from the cohort.

  

Key milestones and expected deliveries:

-   February
-   10+ littlefish graduates Token Engineering Fundamentals course
-   3+ devs get certificate for the cadcad course 

  

**Module 2: Applying Token Engineering** 
Stakeholders: LFF
Primary Work Group: [[Dream Engine]]
Duration: November 2022 - September 2023
Resources: 300 hrs + module operations budget 

  

This is the module where we take our learning from module 1, and apply it to the Littlefish Foundation. 

  

We want to implement two features on Action sales. Together they are the catalyst in the [Littlefish Action Model](https://publish.obsidian.md/littlefish-foundation/A.+Whitepaper/B.+What+is+the+Littlefish+Foundation/Littlefish+Action+Model), incentivizing further Action with each Action sale. This module will focus on formalizing these features.

1.  Reward Sharing: Every Action sold comes with an agreement that specifies percentages of sales rewards for multiple parties. Instead of the funds going to the single seller of Action, rewards are shared between these parties: the Action producer, seller, colony, and third parties. 
2.  Reward Aging: Shared rewards for parties should decay with time/additional sales. This is to incentivize all parties to further Action.

  

Activities:

-   Topic based discussions on the ethics, economics, and game theoretical aspects of the systems
-   Identifying possible issues, edge cases, weaknesses of the system,
-   Ideating alternative approaches to the problems. ie. Bonding Curves,
-   Create stock and flow models of the system,
-   Analysis of models, 
-   Iterative next step setting for module 3,
-   Publishing results, collecting feedback from other token engineers,
-   Formally specifying requirements, technical specifications for sharing and aging

  

Key milestones and expected deliveries:

-   March 2023
	-   Formal specification of LFF reward sharing system
	-   Formal specification of LFF reward aging system
-   June 2023
	-   Finalized specifications

  

**Module 3: Design, Simulate, Test, Validate** 
Stakeholders: LFF
Primary Work Group: [[The Forge]]
Duration: January - September 2023
Resources: 450 hrs + module operations budget 

The features need to be modeled conceptually, then their economic implications simulated using [cadcad](http://cadcad/), a Python package that helps design, test, and validate complex systems. 

  

Activities:

-   Developing models from module 2 into code with cadcad
-   Simulate, test, and validate using cadcad,
-   Identify customizable parameters, test boundary conditions,
-   Create reports of simulation results, 
-   Analysis of simulation results,
-   Analysis of real world use (data collected through test client),
-   Publishing results, collecting feedback from other token engineers,
-   Determine parameters for LFF reward sharing and aging. 

  

Key milestones and expected deliveries:

-   February   
	-   Basic reward sharing model using cadcad
-   April
	-   Reward sharing analysis report 
-   September
	-   Reward aging analysis report

  

**Module 4: Smart Contract, Off-chain, and Frontend Development**
Stakeholders: LFF, Cardano users
Primary Work Group: [[The Forge]]
Duration: September 2022 - September 2023
Resources: 450 hrs + audit budget + module operations budget 

  

In this module, we iteratively implement reward sharing and aging features. We develop the smart contract for Action sales, the off chain code to build transactions, and the frontend to put Actions on sale. 

  

The features will be iteratively added, starting with a basic model of equal share reward percentages, then extending that functionality according to work in other modules.

  

Activities:

-   Developing a sales smart contract with Plutus,
-   Developing off-chain code to build transactions and interact with the smart contract,
-   Design UI/UX for frontend,
-   Developing front-end code,
-   Developing a backend to collect data on Action sales, rewards shared, as they’re put on-chain.

  

Key milestones and expected deliveries:

-   December   
	-   Basic sales contract, frontend ready
-   April
	-   Complex reward sharing (arbitrary number of awardees, percentages) implemented in smart contract, frontend integrated
-   September
	-   Reward aging implemented

  

**Module 5: Marketing Action**

Stakeholders: LFF, Catalyst and Cardano community
Primary Work Group: [[Love House]]
Duration: January - September 2023
Resources: 200 hrs + marketing campaign budget + module operations budget

  

Once we have a working smart contract and a frontend that can interact with it, we’ll start the Beta phase where we invite close communities to interact with these tools. 

  

We’ll find these communities through organic marketing efforts: in ours and others’ community meetings, and hold workshops showcasing product capabilities. 

  

Once we’re ready with a full-fledged feature set, we’ll also embark on a more classical digital marketing strategy, using Twitter, and other mediums to market our efforts.

  

Activities:

-   Workshops, meetings, to showcase features, discuss developments
-   Digital marketing through Twitter, and other mediums 

  

Key Milestones and expected deliveries:

-   April 2023
	-   1000 Action sales
-   September 2023
	-   50000 Action sales