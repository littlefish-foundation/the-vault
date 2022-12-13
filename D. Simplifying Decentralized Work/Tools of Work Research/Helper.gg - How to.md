#THC #work-tools #Discord 
It is a subsidiary of "Parent.gg" project.
Panel FQDN = https://panel.parent.gg/
# What is it?
```
Helper.gg is a multifaceted, highly advanced Discord integration: designed to facilitate communication between support teams and their clients through the use of a ticket system. Of course, there are several bots out on the market that operate on the same premise, but every system has its share of flaws
```
Helper.gg streamlines communication of a team with other teams and end-users. 
Developers of the bot boldly stated that they created this to address "flaws and shortcomings" of other bots are in the market. 
# Administration
## Panel 
- Staff accounts authorized through the panel (https://panel.parent.gg/) can alter Support, Management, Billing, Purchasing, Sales etc.
* After authorizing Helper.gg on your discord, it automatically pulls roles from your guild;
![[helpergg_pulls_guild-ranks.png|250]]
* You can see created tickets through the panel and close them using the "Actions" menu;
![[helpergg_panel-ticketview.png|550]]
## Discord
* Free members can have 3 staff roles (interchangeable on the panel) and Premium members can have 20 staff roles.
Below are the permission table of Discord Support Roles that you can assign to support team members;
![[helpergg_discord-support-permissions.png]]
# Features
## Free of Charge
* One advantage of Helper.gg is that it provides "zero-setup" feature on Discord's end. But you still need to configure the panel to suit your needs.
* It is compatible with "Discord Roles" when dealing with tickets, providing features like;
	* Rename
	* Add
	* Remove
	* Transcript
	* Translate etc.
* You can politely ask users in the guild to stop spamming. (Miscellaneous Messages > Please Stop Spamming)
* You can set a goodbye/farewell message which Helper.gg will post in the ticket indicating that the user created this ticket has left the guild. (Automation Settings > Message on User Leave)
	* This is especially good for pinpointing unsatisfied end-users and improve your customer relations/support.
* You can use "Ticket Tags" to categorize the tickets you receive for a cleaner environment.
## Premium
* There's an option to automatically remove tickets if the user, who created the ticket, leaves your guild under "Automation Settings > Close Tickets When User Leaves". This might be handy for you to get rid of piling tickets.
* You can set a timeout for a ticket to automatically close unless there's a response in predefined hours. (Automation Settings > Auto Close Tickets After No Reponse* (Hours)) (*Yes, there's a typo in the panel)
* There's an auto-delete feature for messages in seconds, requiring auto-close to be enabled.
* You can also change color of your messages with HEX codes (e.g. FFFFFF)
* You can limit special characters in user messages except '-' if you want to.
* You can prevent users from creating spam tickets.
	* > Mechanism here is not explicitly defined
* Bot can tell how much time in seconds until the server is banned due to spamming
* You can gather transcripts of the closed support ticket through email, Discord server or DM for benchmarking purposes.
# Usage
## Commands
> -ticket "Reason" > This creates a new channel with "ticket-(numberoftheticket)".
> -rename > renames the automated "ticket-#" convention easily.
> -add @user or role" > Allows you to add user(s)/role(s) that you wish to the ticket.
> -remove @user or role" > Removes user(s)/role(s) from the ticket.
> -status {id} or "category" > Moves ticket to predefined ID's and categories.
> -reason {reason} > Adds reason to the ticket if it's not already present.
> ***-translate {language} @user > Automatically translates the ticket to your language and reply to user's language. **This is a quite useful one*****
> -claim/unclaim > Staffs with "Claim Tickets" permission use this command to claim the ticket, vice versa.
> -close (Reason) > Obviously, closes the ticket. You can optionally ask for user confirmation, too.
> 	-sclose > Closes the ticket and removes everyone from the ticket. Good for archiving important knowledgebase.
> -help > Displays the help menu as below
![[helpergg_help.png]]
For more detailed information regarding commands; https://docs.parent.gg/commands/
### Known Issues
* Almost every time you connect to the panel, it asks you for authorization, which is quite annoying.
![[helpergg_reauthorize-everytime.png|250]]