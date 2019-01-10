module.exports = {
	name: 'help',
	description: 'Help Command',
	execute(message) {
    const Discord = require('discord.js');
  
   
		message.channel.send({
  "embed": {
    "title": "This is a list of my commands",
    "description": "No, not gonna write a description for this",
    "url": "https://discordapp.com",
    "color": 5396178,
    "timestamp": "2019-01-10T12:50:59.717Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/338649491894829057/6c941cc6ef0b3f1ee2ba611a4edc2d68.png?size=256",
      "text": "na_da"
    },
    "thumbnail": {
      "url": "https://discordapp.com/assets/1cbd08c76f8af6dddce02c5138971129.png"
    },
    "fields": [
      {
        "name": "```!help```",
        "value": "❓ Idiot...you just used that 🤦"
      },
      {
        "name": "```!urban searchterm```",
        "value": "📗 Check the definition of a word in the urban dictionary"
      },
      {
        "name": "```!avatar @username```",
        "value": "📸 Get the link to the avatar picture of a user"
      },
      {
        "name": "```!server ```",
        "value": "🗃 Display some basic infomation about this server"
      },
      {
        "name": "```!ping ```",
        "value": "🎾 Pong!"
      },
       {
        "name": "```!prune number ```",
        "value": "🗑 Prune 1-99 messages (admin only)"
      },
      {
        "name": "```!rr ```",
        "value": "✅  Post the prepared message for reaction roles (admin only)"
      }
    ]
  }
});
	},
};