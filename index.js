const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () =>{

console.log(`${client.user.username} is klaar voor gereet!!1!`);
client.user.setActivity("Minecraft", { type: "PLAYING" });

});