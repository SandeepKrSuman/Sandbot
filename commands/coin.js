function coin(msg){
    let ht = Math.floor(Math.random()*2);
    let choice = ht ? 'Heads it is!' : 'It\'s a Tail.';
    msg.reply(`\`${choice}\``);
}

module.exports = coin;