#fund9 

## Please describe your proposed solution.

**Background**

Earning in today’s world is capturing the time and effort of individuals for a predetermined amount of pay. An hour's pay for an hour's work: an earning relationship between the employee and employer where the employee is beholden to the employee, a relationship of subservience.  

  

When these relations scale, they create organizations with pyramids of power:

All organizations prior to Teal were structured as pyramids for a simple reason: it is a natural consequence of the boss-subordinate relationship. 

  

These structures centralize power at the top of the pyramid and often make life miserable for those at the bottom. The agency of individuals to make decisions is taken away from them. Things need to be permitted. Independence at the workplace is a dream. 

No pyramids exist at the Littlefish Foundation. We replaced them with distributed decision-making, natural, fluid hierarchies, and self-management. Enabling this kind of work is at the heart of all we do at LFF, and **this proposal is key** in making it happen at scale.

  

**Redefining Earning Through Action** 

We live in the world of the pyramid. It looks so strong with its structural integrity. It has deep roots in our institutions, long standing organizations. Is there a chance we can topple it?

  

The problem seems complex when you look at the symptoms, the pyramids themselves. The consequences of the system are complex, yet the underlying cause is very simple: the **earning relationships**. We just have to change it into something else. 

  

Enter **reward sharing**. 

  

In employee-employer systems, the proceeds from any activity are shared between the employee and the employer, usually in an unequal split that lets the employer get a large portion of the rewards, thanks to the wage system.

  

Now imagine we remove the employer. In its place are peers. Other members of the organization, other workers. Earlier, the reward went to the employee, now it’s shared between the worker, and their peers. 

  

Let’s make that more concrete with an example. Remember, this all needs the [[3- Littlefish Action Model]] to make it work.

  

Imagine you are a software developer. You just updated the website with a nifty feature and created an Action to show your work. You are proud of the work and someone validates the pride by supporting your work and buying your Action. You feel great. You got rewards for work you did. You’re hungry for more. 

  

And so are your peers. They just got a percentage of the rewards too. Your work helped them out. Now they’re hungry for more, producing new Actions to get paid. They produce Action and sell it. This time, you get a percentage of the rewards, along with everyone else in the organization. 

  

At this point you may be thinking “this sounds well and all, but could it really work?”. How can we have a system that benefits the worker, and all other members of the organization at the same time, while keeping the organization healthy? 

  

Conceptually, reward sharing is simple. Once you get down to engineering to achieve the outcomes you want, things get complicated. There are many ways to implement it, many parameters to play with. 

  

In crypto-economic systems, roads going through half-baked ideas and bad engineering leads to [collapsing bridges](https://www.youtube.com/watch?v=j-zczJXSxnw). A comprehensive engineering approach is necessary to prevent further Luna incidents.

You might need a [[Glossary of Terms|refresher]] on LFF lingo before proceeding.

  

**Problem 1 - How do we split?**

Just setting the split parameter has widespread consequences. Imagine the effects of these splits:

-   5% Action producer, 95% colony
	-   Similar to the employee-employer system hmm?
-   50% Action producer, 50% colony 
	-   An equitable distribution, or is it? Does the size of the colony matter in this case?
-   95% Action producer, 5% colony
	-   What values does this colony represent? 
-   30% Action producer, 50% colony A, 20% colony B
	-   Hmm, that’s interesting. What does that look like? A 20% ownership stake by colony B in colony A Actions? A direct donation by colony A to B? A business deal? 

  

Suffice to say, there are many different ways this can play out. Simply by changing the parameters of shared rewards, we create different outcomes. 

  

**Problem 2 - Who shares in the rewards?**

Now that is an interesting question. The answer is dependent on the organization.

  

Imagine a business colony. We know who the members of the colony are, the employees. They share the rewards, simple. Great, by how much? That’s simple too. Boss gets X%, the middle manager Y%, everyone else gets crumbs. hmm… 

  

Imagine a digital community in Catalyst. Who are the members? Is the person who contributes consistently a member? Yes, of course. How about that guy who contributed for a week last month and hasn’t shown up since? 

  

Digital communities are fluid, this is not so simple to answer without additional mechanisms like pledges, but those systems create gated communities that restrict the flow of people.  

  

For reward sharing in digital communities, who shares the rewards must be answered.  

  

**Problem 3 - How much do individual colony members get?**

Once we have a list of individuals who represent the colony, our job is simple right? We just send them their percentage. But how do we calculate that percentage?

  

Simple way to do it is to treat everybody the same. All members of the colony get the same amount. But is that fair to the consistent contributor who puts in effort every week? What would that incentivize: Do the bare minimum possible to get rewards. The result is collapse. Hundreds of examples exist for this in history. 

  

**How we approach the problem: Token Engineering R&D** 

The problem we tackle is extremely critical. The product we produce, when used at scale, has the potential to uproot existing organizational structures and replace them. To not end up at the same or a worse place, a rigorous engineering process is required.

  

Enter token engineering. This is a new cross-disciplinary field, that “[draws from established practices in systems, electrical, robotics & controls engineering, and more](https://tokenengineeringcommunity.github.io/website/docs/getting-started-welcome/#so-what-is-token-engineering)”.

![[token-engineering.png]]

The goal of token engineering is to design and create tokeneconomic systems that are robust against exploits, unintended consequences and cascade failures, in order to protect and empower users. 

  

And that is the goal of this proposal: To design and create a tokeneconomic system of reward sharing, that is robust against exploits, unintended consequences and cascade failures. A system that empowers users to topple pyramids and protects them from disaster.

  

**Finally, The Solution**

Token engineering, being a multidisciplinary field, requires a diverse background. A wide set of perspectives must be incorporated into the product to account for the various tradeoffs in the problem set. A diverse set of experts in economics, game theory, ethics, psychology, computer science must work together to understand and solve the problem at hand.

  

**1 - LFF Token Engineering Fundamentals Cohort**

The first thing we do to tackle this is to get everyone up-to-speed in token engineering. We take the [Token Engineering Fundamentals](https://tokenengineeringcommunity.github.io/website/docs/academy-welcome/#token-engineering-fundamentals) course as the Littlefish Foundation cohort, including all members of LFF who are interested in token engineering. 

  

The more diverse the background of those in the cohort, the better the possible learning, so we’ll open this up to anyone who wants to join in from the Catalyst community.

  

We apply our learning to the problems mentioned, through discussions and problem specific workshops. The aim of this stage is to come up with specific models and hypotheses which we can then simulate.

  

**2 - Modeling, designing, simulating, and testing the system**

The next stage is to turn these hypotheses and models into code using [cadcad](https://github.com/cadCAD-org). Cadcad is a framework that focuses on computer aided design for complex systems. It is a Python based package for learning. We learn this framework together as a cohort, then build reward sharing models using it.

  

This is a research and development process, where we start out simple, modeling the basic reward sharing structure, and then iterate with progressional learning.

One thing we already have in mind to solve problems 2 and 3 is what we call reward aging. We want to implement it using the Fibonacci numbers to age rewards. 

  

**Reward Aging Through Fibonacci Numbers**

Once an Action is produced, the reward share for the producer of that Action, let’s call A, gets from future Actions of the colony is reset. The next Action produced rewards the maximum amount.

  

The next Action sold for the colony will reduce the reward share for A. With each next Action, the reward is aged in accordance to the next Fibonacci number in the sequence. 

  

This incentivizes consistent contribution from participants. Again, the parameters have an incredible effect that needs to be understood. How fast should aging take place? Should aging occur with time, number of Actions sold, price, or some other parameter? Who gets the aged portion of the rewards? These must be simulated and thoroughly understood before set in the unchangeable setup of smart contract code.

  

**3 - Build reward sharing with smart contracts**

To implement the reward sharing system, we’ll develop a sales smart contract for Actions that supports reward sharing between an arbitrary number of participants. 

  

The initial version will implement a basic reward sharing scheme with specified sharing percentages. We will then iterate according to test results, building out the full feature set, as we develop it through the process. 

  

**4 - Use reward sharing to guide development process**

We are big believers in experimentation. We want to taste our own medicine. We want to use the things we’re building to make sure they do what we intend them to do. 

  

This means we’ll be using the reward sharing mechanism we’re building out, when we’re making payments for Actions produced in the name of LFF. That means we’ll use the smart contract internally as we’re developing it. If we figure out a practical way of implementing this manually, perhaps through Excel magic and manually sending payments, it also means we’ll use it even before we have smart contracts.

  

We believe using these tools will provide critical input into the process, helping us identify and solve issues before they exist.

  

**5 - Understanding fish token**

Once we know the technical details of the crypto-economic system we want to create, we can look into embedding these features into the fish token. Our aim is to embed as much of the functionality into the token but we know there are [some limitations](https://github.com/input-output-hk/cardano-ledger/blob/master/doc/explanations/features.rst) like unchangeable transfer logic that prevents us from implementing reward sharing directly into the token.

  

Through this proposal, we will understand what features can be embedded into fish token, what will need to be implemented through smart contracts, model the crypto-economy these structures create and how a token can be used to enhance them.

  

**Who will benefit?**

The beneficiary of our work is all users of the Littlefish Foundation platform, starting with the builders of LFF, and expanding into the Catalyst community. All users of Actions will benefit from a reward sharing mechanism that is tested and true. They will enjoy the benefit of liberating earning relationships, allowing them to freely explore their interests while [[3- The Littlefish Way#It Starts within the Individual|searching for their Ikigai]].

  

**Outcome**

This work will create a brand new paradigm for earning designed to create public good outcomes. A paradigm where:

-   individuals are empowered with greater autonomy,
-   work represents [[4- The Attributes of Action|values]],
-   previously unpaid (public good) works can be valued, 
-   everyone who contributes earns,
-   collective, global intelligences can form and solve problems at a never before seen rate.

  

In the short term, this means a new work paradigm for DAOs and digital communities that makes them more effective in what they do. In the long term, it means a [[3- The Littlefish Way#Towards Decentralized Civilization|decentralized civilization]].
## Please describe how your proposed solution will address the Challenge that you have submitted it in.
**Alignment with the Challenge**

> … the current options are all based on, mostly, the Ethereum blockchain

  

Worry no longer dear Cardanian. Littlefish Foundation, the comprehensive, go-to platform for DAOs everywhere is being built right here on Cardano. A coordination tool and a digital economy in one, built with solid foundations on organizational science and ethical philosophy.

  

When we implement all we propose in this proposal, Cardano will have something no other blockchain has. A DAO community collaboration, operation, creation, and governance platform, with an approach that is truly unique in the blockchain space. We aren’t building what others are building. We’re building something truly original. A new, global earning economy fit for the 21st century.

  

**Key Metrics**

This proposal has the potential to be the greatest improvement to date on these challenge Key Metrics:

-   Number of Communities engaged in collaboration using Cardano DAO creation tools.
-   The proposal will greatly impact this metric. Many Littlefish colonies will be using the platform, engaging in DAO creation through Littlefish colonies.
-   Amount of ADA coming from DAOs transaction fees after the solutions on this challenge get implemented (> than the challenge's allocated fund amount)
-   Reward sharing will supercharge the amount of spending on Littlefish Action NFTs, dramatically increasing the DAO transaction fees.

## What are the main risks that could prevent you from delivering the project successfully and please explain how you will mitigate each risk?
![[Common Risks]]

**This proposal - Extensive R&D Requires Consistent, Quality Effort by a Diverse Knowledgeable Group**

We need to understand the problem we’re solving at a deep level. Without doing so, we risk economic collapse, as many cryptocurrency projects have found out. We’re building a bridge, it can not be allowed to sway. We must measure many times, and cut once.  

  

This means the R&D effort must be extensively thorough. A diverse team of individuals with economics, game theory, computer science, ethics, and computer science backgrounds is needed to understand the topic in depth. 

  

To mitigate the risk, the first step of our plan is collecting this group of people from the LFF and Catalyst community as a token engineering learning cohort. This will get us to the starting line locked and ready to perform quality R&D work.