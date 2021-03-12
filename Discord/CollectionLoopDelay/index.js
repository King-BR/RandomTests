const Discord = require("discord.js");
const config = require("../config.json");

const client = new Discord.Client();
client.login(config.token);

client.on("ready", function() {
  console.log("start");

  var guild = client.guilds.cache.get("498620224501841931");
  const members = guild.roles.cache.find(role => role.name === "@everyone").members.filter(m=> m._roles.length === 0).map((m) => { return m });

  members.forEach((m, i) => {
    if(m.bot === true) return;
    if(m.kickable === false)return;

    setTimeout(function() {
      console.log(m.id);

      if(i == (members.length - 1)) console.log("end");
    }, i * 1000);
  });
});