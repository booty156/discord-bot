module.exports = {
	name: 'map',
	description: 'Set maps and select a random one',
	args: true,
	execute(message, args) {

     const maps = args
     const randomMap = maps[Math.floor(Math.random()*maps.length)]

		 if (!args.length) {
        return message.channel.send(`You didn't provide any maps`);
    }
    message.channel.send(`Your Random map: ${randomMap}, ${message.author}!`);
	},
};