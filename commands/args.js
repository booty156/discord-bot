module.exports = {
	name: 'args',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		 if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    message.channel.send(`Arguments: ${args}`);
	},
};