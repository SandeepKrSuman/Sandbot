module.exports = {
    name: 'guildMemberAdd',
    execute(member){
        const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
        if (!channel) return;
        channel.send(`We are delighted to have you among us 😍. Warmest welcome and good wishes!, ${member} 🤗`);
    }
};