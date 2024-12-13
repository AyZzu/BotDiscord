const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('ini test bot'),
    async execute(interaction, client) {
        await interaction.reply({   content: 'on'});
    }
}