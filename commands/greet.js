function greet(msg, args){
    const arg = args.length > 1 ? args.join(" ") : args.join("");
    switch(arg.toLowerCase()){
        case 'hello':
            msg.reply('Hi ๐๐ป');
            break;
        case 'hi':
            msg.reply('Hello ๐');
            break;
        case 'how are you?':
        case 'how are you':
            msg.reply('I am fine. Hope you doing well ๐');
            break;
        case 'ka ka':
            msg.reply('chi chi ๐');
            break;
        case 'la la':
            msg.reply('Le o ๐คฃ');
            break;
        case '':
        case ' ':
        default:
            const greetings = ['Bonjour', 'Hola', 'Namaste ๐', 'Asalaam alaikum', 'Olรก', 'Konnichiwa', 'Salve', 'Nวn hวo', 'Zdravstvuyte', 'Dzieล dobry', 'Merhaba', 'God dag'];
            const index = Math.floor(Math.random()*greetings.length);
            msg.channel.send(`${greetings[index]} ${msg.author} . May you have a cheerful day ahead. You are awesome! โบ`);
    }
}

module.exports = greet;