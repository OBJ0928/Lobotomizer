const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
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



  if (message.author = client.user) {
        console.log('Sending reply');
        message.reply('hello');
 
    }
})



client.login("NjcyMDk5ODQ2MTIzMTU5NjAy.GhGe3d.od4AepBbwWi5FDfZRTnyxLcEdwKoLL-E032TD4");