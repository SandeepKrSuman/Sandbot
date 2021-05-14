function ping(msg){
    if(msg.content === '!ping'){
        msg.reply('pong!');
    }
}

module.exports = ping;