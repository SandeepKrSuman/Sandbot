function cmd(msg){
    
    const embdmsg = {
        color: 0x0099ff,
        title: 'Sandbot Commands',
        url: 'https://github.com/SandeepKrSuman/Sandbot/blob/master/commands.md',
        description: `Available commands for the Sandbot. \n\n\`\`\`\n ${availablecmds()} \n\`\`\``,
        thumbnail: {
            url: `${msg.author.displayAvatarURL()}`,
        },
        footer: {
            text: 'click on Sandbot Commands above for detailed explaination of the commands.'
        }
    };
    msg.channel.send({ embed: embdmsg });
}

function availablecmds(){
    const fs = require('fs');
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    let ctr = 0;
    let cmdstr='';
    for(let i=0; i<commandFiles.length; i++){
        ctr = ctr+1;
        cmdstr = cmdstr + `${ctr%4===0 ? '\n\n' : ctr===1 ? '': '\t'}` + '!' + commandFiles[i].substring(0,commandFiles[i].length-3);
    }
    return cmdstr;
}

module.exports = cmd;