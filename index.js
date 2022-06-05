require('dotenv').config();
const client = require('./client');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


const prefix = '!';
client.on("messageCreate", async function (msg) {
	console.log("Ready to begin! Serving in " + client.channels.length + " channels");

  let url = "https://www.tabnews.com.br/api/v1/contents/gugadeschamps"
  let response = await fetch(url);
  let json = await response.json();

  if(msg.content.startsWith(prefix)){
    console.log(json[0]);

    const embed = new MessageEmbed()
      .setTitle(json[2].title)
      .setDescription(json[2].body)
    msg.channel.send({ embeds: [embed] });
  }
});




// client.on("message", function (msg) {
// 	// if message begins with "ping"
// 	if (msg.content.indexOf("ping") === 0) {
// 		msg.channel.send("pong!");

// 	}
// });











client.login(process.env.BOT_TOKEN);