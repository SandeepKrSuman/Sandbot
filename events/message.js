module.exports = {
    name: 'message',
    execute(message){
        const commandsHandler = require("../commandsHandler");
        commandsHandler(message);
    },
}