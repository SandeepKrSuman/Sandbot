function avatar(msg, args){
    if(!msg.mentions.members.first()){
        msg.reply(`Your avatar: ${msg.author.displayAvatarURL()}`);
    }
    else{
        const mention = msg.mentions.members.first().user;
        msg.channel.send(`${mention.username}'s avatar: ${mention.displayAvatarURL()}`);
    }
}

module.exports = avatar;