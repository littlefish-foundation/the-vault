---
tool: Discord
---
#work-tools 

![[Pasted image 20221113222801.png]]
## Disclaimer
This bot is no longer available as a service. You need to self-host it if you want to use it.
![[Pasted image 20221113223130.png]]

## Bookmarking Discord Messages

Discord is a main [[littlefish Tools of Work| tool of work]] for DAOs and for the LFF.  Unfortunately, the ability to bookmark messages within Discord is a missing feature of Discord that [many](https://support.discord.com/hc/en-us/community/posts/360057714051-Message-bookmark) [people](https://support.discord.com/hc/en-us/community/posts/360048465172-Channel-Bookmarks) are [missing](https://support.discord.com/hc/en-us/community/posts/360033360152-Saving-the-Urls-shared-in-channels-like-bookmarks). 

👀

Bookmarking is important for several reasons.  As an individual, we want to collect and curate the important links for projects and for future reference.  Likewise for groups and communities, shared resources are a way to establish standards and shared "Bodies of knowledge".  This can be useful for onboarding and educational functions of communities.

### The steps

I searched for bookmarks in Top.gg, a resource for discord bots.  I found two that seemed to address bookmarking of messages:  [Bookmarker](https://top.gg/bot/453939662168260612) and [Bookmark](https://top.gg/bot/910207197382864946) and [Botmark](https://top.gg/bot/911410913138081863)
![[Pasted image 20221113223048.png]]

All of these seem to work in a similar fashion - react to the message you want to bookmark and the bot sends you a dm with a copy of the message.  

*I choose Bookmark by Skeleton Man*
from the Discord -
```
Bookmark messages and attachements. Let users or yourself bookmark posts to revisit them later on, or keep them as a back up.

---

Bookmark will bookmark any message or attachement when you react with the bookmark emote. The bot will send you an embed with a link to the original message, attachements included in the original message will be added aswell. Bookmark detects NSFW content and spoilers the attachments when sending it to you. No need to worry about showing NSFW items in a SFW enviroment!

Latest additions: Choose your own emote to recieve bookmarks!

Commands:

/help 
/info 
/emote [set,reset] 
/setup
```

The support servers for the others were not available but I was able to contact the developer of 'Bookmark'.  Unfortunately, the bot is not very stable.  However, it might be worth an attempt as using.  Also, the developer, skeleton man, has offered to share the source with us to host it ourselves.  See the [Discord support channel](https://discord.gg/mH2wTKg8) for our testing and conversation.  

## Note on how these bots solve the problem:  
There is another way to solve the problem of saving messages or highlighting them for future reference: the search function!  A possible method would be to react with an emote and then search for that emote.  This is a [requested feature](https://support.discord.com/hc/en-us/community/posts/360041795132-has-reaction) and is not currently supported in Discord.  [Many folks have requested](https://duckduckgo.com/?q=discord+search+by+reaction&t=newext&atb=v333-1&ia=web) this...

Reactions are a big part of the Discord Bot experience.  Here is the [Discord.js section on reactions](https://discordjs.guide/popular-topics/reactions.html#reacting-to-messages)

### How to use 'bookmark' discord bot
Invite the bot to the server - [How to invite a bot]([https://www.howtogeek.com/744801/how-to-add-a-bot-to-discord/](https://www.howtogeek.com/744801/how-to-add-a-bot-to-discord/ "https://www.howtogeek.com/744801/how-to-add-a-bot-to-discord/"))
- [ ] review the bot commands - Commands: /help /info /emote [set,reset]  /setup
- [ ] find the message you want to save
- [ ] react with the :bookmark: emote
- [ ] check your DMs for a message from the bot
