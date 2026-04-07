const { Client, GatewayIntentBits, Events } = require('discord.js');
const fs = require('fs');

const client = new Client ({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});


client.once('clientReady', () => {
  console.log('==============================================');
  console.log(`Logged in as the bot ---> ${client.user.tag}`);
  console.log('==============================================');
});


client.on(Events.MessageCreate, (message) => {
  if (message.member.permissions.has('Administrator'));

  let bannedWords = {};
  bannedWords = JSON.parse(fs.readFileSync('./bannedWords.json', 'utf8'));
  
  for (let i = 0;i < bannedWords['bannedWords'].length;i ++) {
    if (message.content.toLowerCase().includes(bannedWords['bannedWords'][i])) {
      message.delete();
    }
  }
})


client.login('TOKEN_HERE');