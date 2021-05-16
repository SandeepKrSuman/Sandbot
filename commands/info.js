function info(msg){
    const guild = msg.guild;
    const guildinfo = {
        color: '#da7f8f',
        title: `Info for ${guild.name}`,
        thumbnail: {url: `${guild.iconURL()}`},
        fields: [
            {name: '\u200B', value: '\u200B'},
            {name: 'Owner', value: `${guild.owner.user.tag}`, inline: true},
            {name: 'Region', value: `${guild.region.toUpperCase()}`, inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Created', value: `${handleDate(guild.createdAt)}`, inline: true},
            {name: 'Total Members', value: `${guild.memberCount}`, inline: true},
        ],
    };

    msg.channel.send({embed:guildinfo});
}

function handleDate(dt){
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = dt.getDate();
    const month = months[dt.getMonth()];
    const year = dt.getFullYear();
    const dtstr = `${date} ${month}, ${year}`;

    return dtstr;
}

module.exports = info;