const Discord = module.require("discord.js");

modue.exports = {
    name: "wasted",
    description: "Put the GTA Wasted pic over avatars!",
    run: async(client, message, args) => {
        const user = message.mentions.members.first();
        if (!user) {
            return message.channel.send("Wasted? Who?");
        }
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        await message.channel.send({ files: [{ attachment: `https://some-random-api.ml/canvas/wasted/${avatar}`, name: 'file.jpg' }] })
    }
}