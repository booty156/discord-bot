module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
    
		if (!message.mentions.users.size) {
			return message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}\nUser since: ${message.author.createdAt}\nAvatar: ${message.author.avatarURL}\n`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Username: ${user.username}\nID: ${user.id}\nUser since: ${user.createdAt}\nAvatar: ${user.avatarURL}\n`;
		});

		message.channel.send(avatarList);
	},
		
};