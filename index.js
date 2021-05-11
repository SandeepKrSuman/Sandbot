require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const commandsHandler = require("./commandsHandler");

client.once('ready', () => {
	console.log('The bot is now ready!');
});

client.on('message', commandsHandler);

client.login(process.env.BOT_TOKEN);