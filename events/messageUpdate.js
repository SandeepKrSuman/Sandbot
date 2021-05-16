module.exports = {
    name: 'messageUpdate',
    execute(oldmsg, newmsg){
        if(newmsg.content.search('hide from bot') !== -1){
            newmsg.reply(`I know that your old message was: \`${oldmsg.content}\``);
        }
    }
};