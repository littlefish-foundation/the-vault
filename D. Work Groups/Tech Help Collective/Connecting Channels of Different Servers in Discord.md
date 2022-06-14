In Discord you can connect several channels to each other. You can do this with a bot called Connecty. When you set up this bot in two different server’s different channels, the bot will automatically send the messages from one channel to the other instantly. You can add multiple channels with the help of this bot.

Necessary steps to setup the bot are given below;

-   For this sync process, you have to add the bot to your server. Link is; [](https://discord.com/channels/683051973385519155/954234590694883398/966523205865062430)[https://discord.com/channels/683051973385519155/954234590694883398/966523205865062430](https://discord.com/channels/683051973385519155/954234590694883398/966523205865062430)
-   After you have added the bot, you have to get through a verification process. For this verification;
    -   Go to the bot’s support server; [](https://discord.gg/ttbfWSAb)[https://discord.gg/ttbfWSAb](https://discord.gg/ttbfWSAb)
    -   In the server’s ‘spam’ channel, send `b/get_code` as message.
    -   This command will give you a 4 digit code.
    -   Send this 4 digit number message to a channel in your server. Make sure that bot has ‘read messages’ permission in that page.
    -   If you do not complete this verification process in a certain amount of time, bot will leave your server and you will have to add the bot again.
-   After verification you can choose the channel you want to sync with other channels. Make sure that the bot has the necessary read and write permissions on the channel you have chosen.
-   In the channel you have chosen, send command `b/new`. This command will send you a DM, containing an ID. This will setup your channel as the main channel.
-   Now, you can go to other server you want to sync with that main channel. After adding the bot with above steps, go to the channel you want to sync and write `b/sub $ID`. The $ID here is the ID you have created in the previous step. You can repeat this process any channel you want to sync with these channels.
-   Now any message you send to one channel will also be sent to the other channels you synced with.