function react(msg){
    const reactions = ['๐', 'โค', '๐', '๐', '๐', '๐', '๐คช', '๐', '๐ฅณ', '๐', '๐', '๐', '๐ค', '๐ค', '๐คจ', '๐ฎ', '๐ค', '๐', '๐คฏ', 'โจ', '๐'];
    for(let i=0; i<3; i++){
        const pick = reactions[Math.floor(Math.random()*reactions.length)];
        msg.react(pick);
    }
    
}

module.exports = react;