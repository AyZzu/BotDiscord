const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('instagram')
    .setDescription('ini adalah link Saweria Ayzu'),
    async execute(interaction) {

        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Ini Instagram Ayzu")
        .setAuthor({ name: 'Ayzuuuuuuuuuu', iconURL: "https://cdn.discordapp.com/attachments/999087114413154334/1059441266863132752/Untitled82_20221103070057.png"})
        .setURL("https://www.instagram.com/ayzu_ch/")
        .setThumbnail("https://cdn.discordapp.com/attachments/999087114413154334/1059445646966394952/WhatsApp_Image_2023-01-02_at_21.18.16.jpg")
        .addFields({ name: 'Dukung Ayzu', value: 'Follow Ayzu jika ingin lebih dekat dengan Ayzu'})
        .setDescription("Click Di Atas")
        .setImage("https://cdn.discordapp.com/attachments/999087114413154334/1059440780911071333/Logo_AyzStore.png")
        .setTimestamp()
        .setFooter({ text: 'Build By Ayzu', iconURL: 'https://cdn.discordapp.com/attachments/999087114413154334/1059441266863132752/Untitled82_20221103070057.png'})

        await interaction.reply({ embeds: [embed] })
    }
}