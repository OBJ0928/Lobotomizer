const { Client, IntentsBitField } = require('discord.js');
const { token, prefix, prompt } = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.FLAGS.GUILDS,
        IntentsBitField.FLAGS.GUILD_MEMBERS,
        IntentsBitField.FLAGS.GUILD_MESSAGES,
        IntentsBitField.FLAGS.MESSAGE_CONTENT,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready.`);
});

client.on('messageCreate', (message) => {
    console.log('Received message: ' + message.content);
    if (message.author.bot) {
        console.log('Message was from bot, returning');
        return;
    }
});



client.login(token).then(() => {
    console.log('Connected to Discord.')
}).catch((err) => {
    console.error(err)
})
