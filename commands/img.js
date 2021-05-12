const fetch = require('node-fetch');

async function img(msg, args){
    let pg = Math.floor(Math.random()*10)+1;
    let response = await fetch(`https://picsum.photos/v2/list?page=${pg}&limit=100`);
    let json = await response.json();
    let index = Math.floor(Math.random()*json.length);
    let imgurl = json[index].download_url;
    if(imgurl && args[0] === 'me'){
        for(let i=0; i<4; i++){
            let j = Math.floor(Math.random()*json.length);
            let image = json[j].download_url;
            msg.author.send(image);
        }
        msg.reply('Sent 4 random images to your DM! 😀');
    }
    else if(imgurl){
        msg.channel.send(imgurl);
    }
    else{
        msg.reply('Unable to find an image 😢');
    }
    
}

module.exports = img;