module.exports = {
	name: 'setrandom',
	description: 'Set elements that can be selected randomly',
	args: true,
	execute(message, args) {

      if (message.member.permissions.has('ADMINISTRATOR')) {
          const random = args;
          return random
      }
    ;
	},
};

	