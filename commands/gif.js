const fetch = require('node-fetch');

async function gif(msg, args){
    let query = args.length > 1 ? args.join(" ") : args;
    let tenorurl = `https://g.tenor.com/v1/search?q=${query}&key=${process.env.TENOR_KEY}`;
    let response = await fetch(tenorurl);
    let json = await response.json();
    let index = Math.floor(Math.random()*10);
    if(json){
        msg.channel.send(json.results[index].url);
    }
}

module.exports = gif;