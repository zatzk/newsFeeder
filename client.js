const { Client, Intents } = require('discord.js');



module.exports = new Client({ intents: [Intents.FLAGS.GUILDS, 
                            Intents.FLAGS.DIRECT_MESSAGES,
                            Intents.FLAGS.GUILD_MESSAGES,
                            Intents.FLAGS.GUILD_VOICE_STATES],
                            partials: ['MESSAGE', 'CHANNEL'] });