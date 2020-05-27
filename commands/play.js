const search = require('youtube-search');
const ytdl = require('ytdl-core');
const Discord = require('discord.js');

module.exports = {
    name: "play",
    description: "plays music",
    async execute(msg, args, client) {

        const errorEmbed = new Discord.MessageEmbed()
        .setAuthor('❌ Error')
        .addField("Error", "You must be in a voice channel to play music")
        .setColor("#c70000")

        const voiceChannel = msg.member.voice.channel;
        if (voiceChannel) {
            voiceChannel.join()
                .then(connection => {

                    try {

                        var searchTerm = `${args[0]}`;
                        for (x = 0; x < (args.length - 1); x++) {
                            searchTerm += ` ${args[x+1]}`
                        }
                        var link = '';

                        var opts = {
                            maxResults: 1,
                            key: process.env.YOUTUBE_SEARCH_KEY,
                            type: 'video',
                        };


                        search(searchTerm, opts, async function (err, results) {
                            if (err) return console.log(err);
                            console.log(results[0].link)
                            link = results[0].link;
                            console.log(link)
                            // console.dir(results);
                            // console.log(link);
                            const stream = ytdl(link, {
                                filter: "audioonly"
                            });
                            const dispatcher = connection.play(stream);
                            msg.channel.send(`Now Playing: ${link}`)
                            dispatcher.on('end', () => connection.disconnect());
                        });


                    } catch (err) {
                        console.log(err)
                    }

                })
        } else {
            msg.channel.send({
                embed: errorEmbed
            })
        }
    }
}