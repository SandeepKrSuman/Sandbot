function greet(msg, args){
    const arg = args.length > 1 ? args.join(" ") : args.join("");
    switch(arg.toLowerCase()){
        case 'hello':
            msg.reply('Hi 👋🏻');
            break;
        case 'hi':
            msg.reply('Hello 👋');
            break;
        case 'how are you?':
        case 'how are you':
            msg.reply('I am fine. Hope you doing well 😊');
            break;
        case 'ka ka':
            msg.reply('chi chi 😂');
            break;
        case 'la la':
            msg.reply('Le o 🤣');
            break;
        case '':
        case ' ':
        default:
            const greetings = ['Bonjour', 'Hola', 'Namaste 🙏', 'Asalaam alaikum', 'Olá', 'Konnichiwa', 'Salve', 'Nǐn hǎo', 'Zdravstvuyte', 'Dzień dobry', 'Merhaba', 'God dag'];
            const index = Math.floor(Math.random()*greetings.length);
            msg.channel.send(`${greetings[index]} ${msg.author} . May you have a cheerful day ahead. You are awesome! ☺`);
    }
}

module.exports = greet;