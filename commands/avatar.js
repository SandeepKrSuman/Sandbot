const Discord = require('discord.js');

function avatar(msg, args){
    if(!msg.mentions.members || !msg.mentions.members.first()){
        const attachment = new Discord.MessageAttachment(msg.author.displayAvatarURL());
        msg.channel.send(`${msg.author} Your Avatar:`, attachment);
    }
    else{
        const mention = msg.mentions.members.first().user;
        const attachment = new Discord.MessageAttachment(mention.displayAvatarURL());
        msg.channel.send(`<@${mention.id}>'s avatar:`, attachment);
    }
}

module.exports = avatar;