---
tool: Discord
category: organization
---
#work-tools #Discord #org-tools

Whenever there is an online meeting with people from all over the world, there is almost someone who is missing the meeting due to the confusion on meeting's time. You can find this problem almost every international community. This is problem for admins as well. Here in Littlefish we are using a Discord bot called [Friend Time](https://discord.com/oauth2/authorize?client_id=471091072546766849&scope=bot%20applications.commands&permissions=85056) that is helping us to minimize this problem.

This bot is there whenever a time is mentioned in chat. When the bot sees a message with time it reacts to it with clock emoji. When you click that clock it sends you a message. For this process to work without an error the bot has to know about your time zone as well. 

You can set your time zone very easily with simple commands. In Littlefish Discord channel we have created a dedicated channel for people to use the bot for setup. Here are the steps to set your time zone.
- Send a message in your dedicated channel saying; /set me
- The bot will prompt you a question, asking for your time zone. It will give you a link listing all the time zones. Select your time zone and send there as a message.
- Then it will want you to confirm this selection. If it is correct just send message 'Yes' and you are all set.

Now let's say you have set your time zone as UTC+2 and the admin of the server created a meeting with a message 'Let's meet at 5pm UTC'. You will see clock emoji on that message and when you click on it, it will send you a message. There, it will tell you that meeting time is 7pm in your time zone.