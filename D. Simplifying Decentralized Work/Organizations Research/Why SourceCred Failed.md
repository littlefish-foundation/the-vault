---
tool: SourceCred
---
#dao-tool #ocean
# Why SourceCred Failed
You are on the right place if, you:

- As a DAO tool maker building a tool to coordinate the DAOs efforts,
- would like to learn about why SourceCred failed,
- so you can decide if you want to implement it in your DAO.
# What is SourceCred

2 things

- Technology to make labour of individuals visible and rewardable with the necessary nuance.
- Organization which was using that technology to improve it and organize its work (That is gone now)


## A bit of history

The origin story goes to 2017 when Juan Benet did not know how to pay contributors outside his company Protocol Labs and he connected with Dandelion who was working in google at the time and was working on SourceCread as his side project.
One have money and the other one the algorithm … love was made.

![](https://paper-attachments.dropboxusercontent.com/s_1BF44480F9BA68EA0E06A7E5232446FC13621087CD0983687A8669686A916FA1_1668612390711_image.png)

## Problems it solves?

There is no good enough metric to reward a permission-less organization

- Objective metrics are too gamable
    - i.e. Per commit, Per line of code
- Subjective approaches are biased and do not scale
    - i.e. Contributors review each other, Give rating to each contribution
## The Solution

Use page rank - google algorithm for ranking search engines based on interconnections and interactions, but adjust it for people.

![](https://paper-attachments.dropboxusercontent.com/s_1BF44480F9BA68EA0E06A7E5232446FC13621087CD0983687A8669686A916FA1_1668612985694_image.png)


To prove the concept community was created which was rewarded based on that experimental technology. The experiment ran for almost 2 years and we can now say that the algorithm works at-least in some of its intended functions.

- It is now proven that it can increase community engagement 
- And unlock side projects previously impossible.
# How SourceCred Works/Worked

**The technology** is responsible for a non-transerable individual score called Cred and transferable token called grain. 
Work created is represented as a “node Graph”, were more connections mean more value, parameters can determine what the community values more and therefore where the rewards flow. Based on that value Cred score is calculated and based on the Cred, Grain is rewarded. 
Cred measures the value of your contribution and can be corrected in time, grain is there to reward you for your current score and to allow for external parties to support your project.

Examples of how a project might use Grain:

- Paying contributors  - If project has funds to pay.
- Creating a project-specific currency, that can bring additional investments
- Creating an internal currency for support of features/ideas.

Each project / community has its own Cred and Grain. The technology in its current state is able to calculate Cred based on data from Git-hub, discourse and discord plugins.

The organisation

- Used cred to pay their contributors for SourceCred development
- Had tone of interaction on discord, deep contributions on discourse and was developing the software on Github.
- It is dissolved now
## The Cred distribution

Source cred is usually set up to distribute based on combination of different policies. Those are

- Balanced (Lifetime distribution)
- Immediate (Last Week) distribution
- Recent distribution - introduces a decay rate to immediate, last week distribution

The original recommended setting was 80/20 Balanced/Immediate distribution
In 2021 Recent distribution was introduced and the new recommended setting became 25/75 Balanced/Recent.

## Core assumptions
- value doesn’t exist in isolated artifacts or events, and you can’t measure value by *counting* events
- instead, you need to look at the *relationships* between contributions to understand their value
- contributions are valuable if they are connected to, or depended on by, other valuable contributions
# Why did SourceCred winddown?

The organization that is SourceCred has been struggling for a long time now, reads the post announcing the dissolution of the organization …  dated Mar 28 2022.

The main reason stated is a lack of interest to continue from the community members themselves. The community was not sure if it makes Sence to push forward. So why would that be?

Apparently it, time to time, Felt like a black mirror episode, a dystopia where everyone is rating each other. We are lucky that the experiment where studied by university researcher which is giving a breakdown of the main reasons that they noticed when talking with team members.


- *CredRank was complex and making it legible didn’t happen - Difficult to understand your cred score. There were not tools that would easily visualize and align the community around a common goal. That was creating anxiety in the community…*
- What was rewarded did not always further the product - being loud about your contributions was important, some thought that social interactions were rewarded over work that would progress the product.
- Invisible work that was not, or rewarded based on discord likes - organizing meetings, helping with alignment, design, project management … was rewarded only if a person would shout out about it on discord, being introvert would not pay off.
- No boundaries for membership - anyone can come and claim funds, creating chaos and anarchy, that can be to detriment of things and makes finding alignment around a goal that much more important, but there we no tools to do so.
- Income volatility - people want some stability in life, it is hard to leave anxiety behind when your next pay check will be determined by algorithm. There are some interesting ideas how to deal with that problem.:
    - Salaries for core members
    - Coordinape?
    - Algorithmic - Algorithm where you trade potential rewards for more stability.

What do I take from it as an external observer?

- Forums are packed with ideas and discussions dating back to 2019, where until today many of that ideas were clearly never realized.
- Discussion include long massive interactions and yet they did not lead to decisive / productive action. Too much talking can be contra productive, but in SourceCred talking was important tool to create rewards and credit.
- The whole story is about technology, it is and technology first approach, where the team looks what culture the technology created. It feels that the community should first know what kind of culture they want to have, but that was not the point of the experiment. So for future projects I would recommend to set up the vision of the culture you want to have first and then measure if your technology is getting you there or not.
# Case Studies
## MakerDAO

Implementation trough DAO forum to reward contributions to the community. No need to register and immediately you are aligeble for rewards, the moment you get 10 USD or more you can ask for them to be send.

Each month 5000 Dai is being distributed, discontinued in 2022. Although activity is still measured.  https://makerdao.sourcecred.io/#/explorer

| +                                                 | -                                                                       |
| ------------------------------------------------- | ----------------------------------------------------------------------- |
| Drives enthusiasm                                 | No identifiable positive impact                                         |
| Being paid without joining the workforce - unique | Creates unwanted noise on the forum                                     |
|                                                   | Low-effort posts are being monetized - distracts from important duties. |

## FWB

Does no longer operate, project is gone.

## TEC

Still a test run, committee is being prepared. Implemented for github and discourse. Rewards split 59:40 between praise and sourcecred … 10% is for other rewards and to reward the reward board. 
**Github**
Main Actions

- Make an Issue
- Make a comment

Interactions
In this case “something” can be an issue or a comment

- Something is being authored
- Something is being merged
- Something is being referenced

**Discourse**
Main Actions

- Make a topic
- Make a post
- Give a like

Interactions

- You get a reply to your post
- You make a reply
- Someone makes something with your topic
- You make a topic
- Your topic is contained in a post
- Your topic is referenced
- Your post is liked
- Your post is referenced
- You are being mentioned
## MetaGame

Used in the core of metagame, first as experiment than adopted in the core. Sourcecred in its curent form is used but is not working, the more you work the less time you have to report in and therefor the less you get paid.
Metagame is therefore restructuring, making source cred the 1st step for casual contributors and newcommers, thinking about adding 2 new layers.:

- Coordinape
- Stable pay

More about Metagame, the DAO onboarding game how to play life: https://metagame.substack.com/p/wait-wtf-is-metagame

## 1Hive

Anyone writhe proposal to decide how to distribute faucet to the community. 1 of such proposals is honey being distributed to the community.  Rewards interaction on Discord, Forum and Github. Similar issues to SourceCred and Maker, but conviction to persist, post from 2022. 
Polen distribution - 2.6 mil USD/year begining 2022
Asking for new distribution every 5 weeks, can not get the results from Nov 20. Even in that ask is stated things on fire with people gaming the system, finally quieted down, because the funding run out, time to ask for new rewards..
Token allocations (Gitcoin, Agave)
Metacred

# Source, interesting articles, Youtubevideos
| What is described                     | tags           | Link                                                                                                                                                                     | Type    |
| ------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| **The winding down of sourcecred**    | end            | [Https://discourse.sourcecred.io/t/sourcecred-the-organization-is-winding-down/1383](https://discourse.sourcecred.io/t/sourcecred-the-organization-is-winding-down/1383) | article |
| **Community member summary**          | end            | https://discourse.sourcecred.io/t/observing-the-credsperiment/1402                                                                                                       | article |
| Introduction to what is SourceCred    | wiki           | https://sourcecred.io/docs                                                                                                                                               | wiki    |
| SourceCred Users                      | case studies   | https://sourcecred.io/docs/beta/who-uses-us                                                                                                                              | wiki    |
| **Seth be overview of sourceCred**    | summary        | https://www.youtube.com/watch?v=fJU5Q3beruE                                                                                                                              | video   |
| Changes to Source Cred by MakerDAO    | implementation | https://forum.makerdao.com/t/changes-to-our-implementation-of-sourcecred/6115                                                                                            | article |
| MakerDAO on discontinuing Source Cred | cancelation    | https://forum.makerdao.com/t/poll-notice-signal-support-for-ending-dai-funding-for-sourcecred/18204                                                                      | article |
| 1Hive polen discussion                | pros and cons  | https://forum.1hive.org/t/my-thoughts-on-pollen-distributions/1089                                                                                                       | article |
| 1Hive Pollen distribution             | introduction   | https://wiki.1hive.org/getting-started/pollen                                                                                                                            | wiki    |
| Metagame new proposal                 | restructure    | https://forum.metagame.wtf/t/proposal-37-compensation-draft/976<br>https://forum.metagame.wtf/t/proposal-39-dao-restructure-relaunch-draft/982                           | forum   |

![](https://paper-attachments.dropboxusercontent.com/s_1BF44480F9BA68EA0E06A7E5232446FC13621087CD0983687A8669686A916FA1_1668614150411_image.png)

## Attachment, similar tools to SourceCred
- [**Sourcecred**](https://sourcecred.io/) - A tool for communities to measure and reward value creation.
- [**Coordinape**](https://coordinape.com/) - Scale your community with tools to reward contributors, incentivize participation and manage resources
- [**Dish Praise**](https://wiki.commonsstack.org/contributors-guide) - The simplest tool for rewarding contributors. From the Commons Stack, you explicitly mention others.

