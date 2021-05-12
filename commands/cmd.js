function cmd(msg, args){
    const embdmsg = {
        color: 0x0099ff,
        title: 'Sandbot Commands',
        url: 'https://github.com/SandeepKrSuman/Sandbot/blob/master/commands.md',
        description: 'Available commands for the Sandbot.',
        thumbnail: {
            url: `${msg.author.displayAvatarURL()}`,
        },
        fields: [
            {name: '\u200B', value: '\u200B'},
            {name: '!ping', value: '```\n ping the bot using !ping \n```'},
            {name: '!greet', value: '```\n make the bot greet you. \n```'},
            {name: '!gif', value: '```\n sends a gif. \n```'},
            {name: '!num', value: '```\n trivia of a number. \n```'},
            {name: '!avatar', value: '```\n sends the requested avatar. \n```'},
            {name: '!cmd', value: '```\n view all the available bot commands. \n```'},
            {name: '!info', value: '```\n info of the server/user. \n```'},
            {name: '!coin', value: '```\n flips a coin for you. \n```'},
            {name: '!choose', value: '```\n make a selection from your options. \n```'},
            {name: '!img', value: '```\n sends random image. \n```'},
            {name: '\u200B', value: '\u200B'},
        ],
        footer: {
            text: 'click on Sandbot Commands above for detailed explaination of the commands.'
        }
    };
    msg.channel.send({ embed: embdmsg });
}

module.exports = cmd;