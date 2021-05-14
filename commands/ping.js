function ping(msg, args){
    if(msg.content === '!ping'){
        msg.reply('pong!');
    }
}

module.exports = ping;