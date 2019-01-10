const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix, token } = require('./config.json');
const initialMessage = "React with a game emoji to assign yourself the associated role";

client.once('ready', () => {
	console.log('Ready!');
});

//send reaction role message
client.on('message', message => {
if (message.content === '!rr'&& message.member.permissions.has('ADMINISTRATOR')) {
    message.channel.send(initialMessage);}
});

//add reactions to message
client.on('message', message => {
	if (message.content === initialMessage) {
		message.react('👍')
    .then(() => message.react('👎'))
    .then(() => message.react('531436404203585536'))
    .then(() => message.react('527157017807159324'))
    .catch(() => console.error('One of the emojis failed to react.'))	
	}
});

//track event
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	const { d: data } = event;
	const user = client.users.get(data.user_id);
	const channel = client.channels.get(data.channel_id) || await user.createDM();

	if (channel.messages.has(data.message_id)) return;

	const message = await channel.fetchMessage(data.message_id); 
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	let reaction = message.reactions.get(emojiKey);

	if (!reaction) {
		const emoji = new Discord.Emoji(client.guilds.get(data.guild_id), data.emoji);
		reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === client.user.id);
	}

	client.emit(events[event.t], reaction, user, );
});

//add role based on reaction
client.on('messageReactionAdd', (reaction, user, ) => {
        if (!user.bot) {

          let Member = reaction.message.guild.roles.find(Member => Member.name === "Member");       
          console.log(`${user.username} reacted with "${reaction.emoji.name}".`)
            
          if (reaction.emoji.name === '👍') {
            reaction.message.guild.member(user).addRole("527071813692293121");
            console.log(`Gave ${user.tag} (${user.id}) the Thumbs Up role.`);
          }
          else if (reaction.emoji.name === '👎') {
            reaction.message.guild.member(user).addRole("527071837050634240");
            console.log(`Gave ${user.tag} (${user.id}) the Thumbs Down role.`);
          }
          else if (reaction.emoji.id === '531436404203585536') {
            reaction.message.guild.member(user).addRole("530004472856969229");
            console.log(`Gave ${user.tag} (${user.id}) the Echo Arena role.`);
          }
          else if (reaction.emoji.id === '527157017807159324') {
            reaction.message.guild.member(user).addRole("530004514896478209");
            console.log(`Gave ${user.tag} (${user.id}) the War Dust role.`);
          }
      }
});

client.on('messageReactionRemove', (reaction, user) => {
	    if (!user.bot) {

          let Member = reaction.message.guild.roles.find(Member => Member.name === "Member");       
          console.log(`${user.username} removed their "${reaction.emoji.name}reaction".`)

          if (reaction.emoji.name === '👍') {
            reaction.message.guild.member(user).removeRole("527071813692293121");
            console.log(`Removed ${user.tag} (${user.id}) the Thumbs Up role.`);
          }
          else if (reaction.emoji.name === '👎') {
            reaction.message.guild.member(user).removeRole("527071837050634240");
            console.log(`Removed ${user.tag} (${user.id}) the Thumbs Down role.`);
          }
          else if (reaction.emoji.id === '531436404203585536') {
            reaction.message.guild.member(user).removeRole("530004472856969229");
            console.log(`Removed ${user.tag} (${user.id}) the Echo Arena role.`);
          }
          else if (reaction.emoji.id === '527157017807159324') {
            reaction.message.guild.member(user).removeRole("530004514896478209");
            console.log(`Removed ${user.tag} (${user.id}) the War Dust role.`);
          }
      }
});



client.login(token);