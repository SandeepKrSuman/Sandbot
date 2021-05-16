module.exports = {
    name: 'messageUpdate',
    execute(oldmsg, newmsg){
        if(newmsg.content.search('hide from bot') !== -1){
            newmsg.reply(`I see you updated your old message to: \`${newmsg.content}\``);
        }
    }
};