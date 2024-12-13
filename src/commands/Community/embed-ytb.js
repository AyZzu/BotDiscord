const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('ini adalah link youtube Ayzu'),
    async execute(interaction) {

        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Ini Youtube Ayzu")
        .setAuthor({ name: 'Ayzuuuuuuuuuu', iconURL: "https://cdn.discordapp.com/attachments/999087114413154334/1059441266863132752/Untitled82_20221103070057.png"})
        .setURL("https://www.youtube.com/@ayzuch.")
        .setThumbnail("https://cdn.discordapp.com/attachments/999087114413154334/1059445646966394952/WhatsApp_Image_2023-01-02_at_21.18.16.jpg")
        .addFields({ name: 'Dukung Ayzu', value: 'Jangan Lupa Untuk Subscribe, Like, Share ygy'})
        .setDescription("Click Di Atas")
        .setImage("https://cdn.discordapp.com/attachments/999087114413154334/1059440780911071333/Logo_AyzStore.png")
        .setTimestamp()
        .setFooter({ text: 'Build By Ayzu', iconURL: 'https://cdn.discordapp.com/attachments/999087114413154334/1059441266863132752/Untitled82_20221103070057.png'})

        await interaction.reply({ embeds: [embed] })
    }
}