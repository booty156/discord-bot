//keeping the bot online
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {
    prefix,
    token
} = require('./config.json');


client.once('ready', () => {
    console.log('Ready!');
});

/*╔═══════════════════════════════════════╗
    Command handler
  ╚═══════════════════════════════════════╝*/
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

/*╔═══════════════════════════════════════╗
    Reaction Role
  ╚═══════════════════════════════════════╝*/
//initial message
const initialMessage = "React with a game emoji to assign yourself the associated role";

//send initialMessage and add reactions
client.on('message', message => {
    if (message.content === '!rr' && message.member.permissions.has('ADMINISTRATOR')) {
        message.channel.send(initialMessage).then(async msg => {
            await msg.react('👍')
            await msg.react('👎');
            await msg.react('531436404203585536')
            await msg.react('527157017807159324')
        });
    }
});

//track event
const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
    if (!events.hasOwnProperty(event.t)) return;

    const user = client.users.get(event.d.user_id);
    const channel = client.channels.get(event.d.channel_id) || await user.createDM();

    if (channel.messages.has(event.d.message_id)) return;

    const message = await channel.fetchMessage(event.d.message_id);
    const emojiKey = (event.d.emoji.id) ? `${event.d.emoji.name}:${event.d.emoji.id}` : event.d.emoji.name;
    let reaction = message.reactions.get(emojiKey);

    if (!reaction) {
        const emoji = new Discord.Emoji(client.guilds.get(event.d.guild_id), event.d.emoji);
        reaction = new Discord.MessageReaction(message, emoji, 1, event.d.user_id === client.user.id);
    }

    client.emit(events[event.t], reaction, user, message);
});


//add role based on reaction
client.on('messageReactionAdd', (reaction, user) => {

    if (!user.bot) {

        let Member = reaction.message.guild.roles.find(Member => Member.name === "Member");
        console.log(`${user.username} reacted with "${reaction.emoji.name}".`)

        switch (reaction.emoji.id || reaction.emoji.name) {

            case '👍':
                reaction.message.guild.member(user).addRole("527071813692293121");
                break;
            case '👎':
                reaction.message.guild.member(user).addRole("527071837050634240");
                break;
            case '531436404203585536':
                reaction.message.guild.member(user).addRole("530004472856969229");
                break;
            case '527157017807159324':
                reaction.message.guild.member(user).addRole("530004514896478209");
                break;
        }
    }
});

client.on('messageReactionRemove', (reaction, user) => {

    if (!user.bot) {

        let Member = reaction.message.guild.roles.find(Member => Member.name === "Member");
        console.log(`${user.username} removed their "${reaction.emoji.name}reaction".`)

        switch (reaction.emoji.id || reaction.emoji.name) {
            case '👍':
                reaction.message.guild.member(user).removeRole("527071813692293121");
                break;
            case '👎':
                reaction.message.guild.member(user).removeRole("527071837050634240");
                break;
            case '531436404203585536':
                reaction.message.guild.member(user).removeRole("530004472856969229");
                break;
            case '527157017807159324':
                reaction.message.guild.member(user).removeRole("530004514896478209");
                break;
        }
    }
});
client.login(token);
