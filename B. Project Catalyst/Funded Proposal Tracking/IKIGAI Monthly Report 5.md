# IKIGAI Monthly Report 5
#project-catalyst #monthly-report

Previous Report: [[IKIGAI Monthly Report 4]]
**Date Written**: 20th March 2023
**Dates Covered**: February 20th 2023 - March 20th 2023

## General Outlook
This month, we worked on designing the character creation system, technical specifications, and building the backend capability of the system. 

## Progress this month

### Module 3: Design UI/UX, Technical Specification
![[Ikigai - Modules#Module 3: Design UI/UX, Technical Specification]]

#### Progress report

This month we've finalized the technical specifications of a littlefish character. A littlefish character is made up of:

1.  Name (Unique Tag)
2.  Avatar
3.  Social Links
    1.  Twitter
    2.  linkedin
    3.  github
    4.  etc.
4.  Description
5.  IKIGAI Tag Cloud
    1.  What do you love?
        1.  Interests/Passions
        2.  Values
        3.  Hobbies
    2.  What are you good at?
        1.  Skills
        2.  Knowledge
        3.  Expertise
    3.  What the world needs?
        1.  World
        2.  Community
        3.  You

The most interesting part in all of this is the Tag cloud. What is the tag cloud?

Something like this:
> creativity, software development, UI/UX, problem-solving, technology, blockchain, innovation, marketing, product development, business development

That's a bunch of words but what does that mean on a character? Here are two examples:


**User 1**

What do you love?
**Values**: creativity, innovation
**Hobbies**: technology
**Interests**: blockchain

What are you good at?
**Skills**: UI/UX
**Knowledge**: marketing
**Expertise**: business development

What the world needs?
**World:** innovation
**Community: …
You:** …

**User 2**

What do you love?
**Values**: problem-solving
**Hobbies**: blockchain
**Interests**: technology, software development

What are you good at?
**Skills**: software development, problem-solving, innovation
**Knowledge**: software development
**Expertise**: software development

What the world needs?
**World:** innovation
**Community: …
You:** …

So, tags may be shared by different characters, and may be used in different fields. This will allow us to match and filter based on these tags to find the right persons for the right project. For example, it will be possible to find: JS developers with a value of open-mindedness who have a hobby of playing strategy games and an interest in history. 

Beyond matching and filtering, this will allow community members to learn about each other, and communities to filter based on a wide array of important characteristics.

### Module 4: Development
![[Ikigai - Modules#Module 4: Development]]

#### Progress report
Development has continued this month. You can see our progress on the [repository](https://github.com/littlefish-foundation/ikigai). There is no clear checkpoint to showcase just yet.

We're building on Firebase, so our main focus this month has been on learning this tool and making sure we are using it right. NoSQL databases are new to us, so we spent some time researching how to model our data. This is important as NoSQL databases are really easy to use incorrectly, meaning we might work ourselves into a corner by making our data unsearchable, unfilterable, unsortable etc.