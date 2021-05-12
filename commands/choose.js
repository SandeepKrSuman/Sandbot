function choose(msg, args){
    const pos = msg.content.indexOf(' ');
    const arg = msg.content.substring(pos+1);
    const options = arg.split(',');
    if(options.length > 1){
        const select = Math.floor(Math.random()*options.length);
        msg.reply(`Selected this for you: \`${options[select]}\``);
    }
    else{
        msg.reply('provide valid options to choose from!');
    }
}

module.exports = choose;