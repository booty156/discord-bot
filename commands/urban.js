module.exports = {     
	name: 'urban',
	description: 'Beep!',
	execute: async (message, args) => {
    console.log(args)  
    
    const Discord = require('discord.js');
    const fetch = require('node-fetch');
    const querystring = require('querystring');
    const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;  

		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}
    const query = querystring.stringify({ term: args.join(' ') });

		const body = await fetch (`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
    console.log(body)

		if (!body.list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = body.list;

		const embed = new Discord.RichEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);
	},
};
