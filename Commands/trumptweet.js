const { MessageEmbed } = module.require('discord.js');
const fetch = require('node-fetch');

module.exports = {
            name: 'trumptweet',
            aliases: ['trump'],
            usage: 'trumptweet <message>',
            description: 'Display\'s a custom tweet from Donald Trump with the message provided.',
            run: async(message, args) => {

        // Get message
        let tweet = args.join(" ");
        if (!tweet) {
            return message.channel.send("Mr. President Says: \`What to tweet ?\`")
        }
        if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

        try {
            const res = await fetch('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + tweet);
            const img = (await res.json()).message;
            const embed = new MessageEmbed()
                .setTitle(':flag_us:  Trump Tweet  :flag_us: ')
                .setImage(img)
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        } catch (err) {
            console.log(err);
            message.channel.send(err);
        }
    }
};