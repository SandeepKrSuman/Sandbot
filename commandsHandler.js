const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = {};

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    commands[command.name] = command;
}

module.exports = function(message){

    if(message.content.startsWith('!')){
        const args = message.content.split(' ');
        const cmd = args.shift().substring(1).toLowerCase();
        if(!commands[cmd]){
            console.log('command not found');
            return;
        }
        commands[cmd](message, args);
    }

}