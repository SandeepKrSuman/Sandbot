function react(msg){
    const reactions = ['😀', '❤', '👍', '😍', '😎', '😏', '🤪', '😇', '🥳', '😆', '😉', '😊', '🤗', '🤔', '🤨', '😮', '🤑', '🙃', '🤯', '✨', '🎉'];
    for(let i=0; i<3; i++){
        const pick = reactions[Math.floor(Math.random()*reactions.length)];
        msg.react(pick);
    }
    
}

module.exports = react;