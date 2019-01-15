module.exports = {
	name: 'embed',
	description: 'Post an embed',
	args: true,
	execute(message) {
		 
    message.channel.send({
  "content": "\u200B",
  "embed": {
    "title": "🌍 18:00 UTC",
    "description": "\n**Check-in** ends 30 minutes before the cup starts!",
    "url": "https://www.thetimezoneconverter.com/",
    "color": 16652916,
    "timestamp": "2019-01-15T17:16:57.119Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/338649491894829057/6c941cc6ef0b3f1ee2ba611a4edc2d68.png?size=2048",
      "text": "na_da"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/emojis/521652170576101377.png?v=1"
    },
    "image": {
      "url": "https://cdn.discordapp.com/attachments/520584731277000704/534762168705482752/EC_Community_Cup.png"
    },
    "author": {
      "name": "Echo Combat Community Cup #03 on 19. January",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/emojis/527157018058817536.png?v=1"
    },
    "fields": [
      {
        "name": "This Weeks Format",
        "value": ":white_check_mark: Anyone can sign up, regardless of location!\n:white_check_mark: Solo sign ups!\n:white_check_mark: Swiss\n:white_check_mark: Each round:*BOTH* Dyson & Combustion.\n:white_check_mark: Tiebreaker decided by !map (#bot-channel)\n:white_check_mark: Split if 6 or more teams per region\n:white_check_mark: Switching players between matches allowed\n:white_check_mark: Coloured tag prize on Real High-End Discord server!"
      },
      {
        "name": "Watch live",
        "value": "[Echo Community Twitch Stream](https://www.twitch.tv/echocommunity)"
      },
      {
        "name": "Need help?",
        "value": "Contact <@509143274087251978> on Discord"
      },
      {
        "name": "Register here",
        "value": "Teams, for solo sign-ups, will be created one hour before the cup starts (17:00 UTC).\nThe requirement? Just be available on Discord at that time.\n"
      },
      {
        "name": "\u200B",
        "value": "[Team Sign-Up](https://www.toornament.com/tournaments/2130746808110120960/)",
        "inline": true
      },
      {
        "name": "\u200B",
        "value": "[Solo Sign-Up](https://docs.google.com/spreadsheets/d/1D3DuXTqSn7obkNRux7Fyc-NCvZtALMYVsQngr7xKF9o/edit?usp=sharing)",
        "inline": true
      }
    ]
  }
});       
  }
};