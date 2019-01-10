module.exports = {
	name: 'args',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if (!args.lenght) {
			return message.channel.send(`Argument(s): ${args}`);
		}
	},
};