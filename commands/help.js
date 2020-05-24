const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Gives a list of help',
    execute(msg, args, guildSize) {
        console.log(args)
        const helpEmbed = new Discord.RichEmbed()
        .setColor(0x4F7942)
        .setAuthor("Commands", "https://cdn.discordapp.com/icons/713946467877912636/433d42fd310800ee68d63bf1e5c006fd.png?size=2048")
        // .setDescription("**'help** - Displays this message.\n**'ping** - :ping_pong: Pong! (Used to show response time)\n**'invite** - Used to invite me to your server\n**'announce** - Used by admins to address the people of the guild\n**'clear <number of messages to delete (up to 100)>** - Deletes `x` number of messages\n**'rule** - Add a rule to a channel that includes `rules`\n**'info**-Learn more about me and my owner/programmer\n**'ban** - Bans a member, type ban to learn syntax of this command\n**'kick** - Kicks a member from the guild, type 'kick for command syntax\n**'vcmute** - mutes a given member\n**'vcunmute** - unmutes a given member\n**'deafen** - Deafens a given member\n**'undeafen** - undeafens a given member\n**'warn** - Warns a member that is mentioned (Requires the MANAGE_GUILD Permission)\n**'userinfo** - Used to find the info of a certain user, usage: <'userinfo> for info about yourself <'userinfo @user> for info about certain user\n**'google** - Search google for something\n**'hastebin** - Used to hastebin to share your code!\n**'flip** - Flips a two sided coin\n**'roll** - Rolls a 6 sided dice")
        .addField("**Basic Commands**", '**b!help** - `gives all bot commands` \n ' + guildSize)
        
    
        msg.react('👍')
        // msg.channel.send('maybe next year')
        // .then(lol => {
        // lol.edit("check out our discord: https://discord.gg/ptksuF . \n b!help: get a list of commands \n b!ping: a command for nerds \n b!fact: get a (not so) fun fact about :b:eans \n b!img: get a photo of beans \n b!exp: check ur server's bean level \n b!invite: invite me to a server :flushed:")
        // // { disableEveryone: true }
        // })
        .catch(console.error);
        msg.channel.send({embed: helpEmbed})
        // msg.channel.send({embed: musichelp})
    
	},
}