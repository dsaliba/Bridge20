# Bridge20
A roll20 discord bridge program
This program ***requires*** the ability to add an api to your campaign

## Instalation Guide

### Part 1 Discord bot
*If you already know how to setup a discord bot skip to part 2*

1. Go to your discord application dash: https://discordapp.com/developers/applications
2. Create a new apllication
  -Fill out bot information to your satisfaction
3. Select the bot tab on the left and add a bot user
  -remember to name your bot and give it a profile if you would like
4. While in the bot menu copy your token and put it in a text file for safe keeping we will use it in part 2
   - **YOUR TOKEN IS BASICALY THE BOTS LOGIN INFO DO NOT SHARE IT**
5. Switch back to the general information tab and copy the CLIENT ID
6. Finaly go to this url https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot replacing CLIENTID with your ID and add the bot to your desired server

### Part 2 Configuring settings
This section will deal with how to fill out the settings.JSON file once you have downloaded the repo

* roll20
  - email
    - Change this field to be the email tied to a roll 20 acount with gm acces to the campaign
  - password
    - Password coresponding to the aformentioned email
* game
  - apiLink
    - The URL of the api menu for your campaign
  - campaignHome
    - The URL to the campaign menu (note this is not in use as of now)
 * discord
   - token
     - Your discord bot's token (found in part 1)
   - channel
     - The name of the discord channel you want to be the bridge *(Note: do ***NOT*** include the leading hashtag, another note this is currently not functional just name the channel "bridge")*
* settings
  - printFullRoll
    - Either "yes" or "no", if yes rolls will display with the individual value of each roll under them
* players *Note this is an array , player objects can be added an removed to your desire* (This step is optional, at the moment the only reason for it is to make /whisper commands dm the player
  - discord
    - The discord ID of the player (Information on how to find this is [here](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
  - rollName
    - The name of the roll20 ***character*** bound to this player (note: ***character***, not acount)

### Part 3 Roll 20 API
In this final section we will add the API to your campaign

1. Go to the game menu of your campagin
2. Click the gear and navigate to the API menu
3. Select create API
4. Copy and paste the contents of API.js into the new API you created
5. Select save

## Run instructions
1. Run ```run.bat``` and it should start up on its own
2. When you want to close it go to the command shell and enter control c (^c)
