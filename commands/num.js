const fetch = require('node-fetch');

async function num(msg, args){
    let numb;
    let numurl;

    if(args.length > 0){
        for(const arg of args){
            if(parseInt(arg)){
                numb = parseInt(arg);
                numurl = `http://numbersapi.com/${numb}/trivia?json`;
                break;
            }
        }
        if(!numb){
            msg.reply('Provide a valid number!');
            return;
        }
    }
    else{
        numurl = `http://numbersapi.com/random/trivia?json`;
    }
    
    let response = await fetch(numurl);
    let data = await response.json();
    if(data.found){
        msg.channel.send(`\`\`\`\n ${data.text} \n\`\`\``);
    }
    else if(!data.found){
        msg.reply(`No trivia associated with ${numb}. Try a different number.` );
    }
}

module.exports = num;