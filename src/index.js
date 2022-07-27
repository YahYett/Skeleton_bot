//Import needed packages
import Client from 'discord.js';
import config from 'dotenv';
import fs from 'fs';

//Create A New Client instance
const client = new Client({
    disableMentions: "everyone",
    partials: ['MESSAGE', 'USER', 'GUILD_MEMBER']
});

//Extensive error handling
client.on('warn', err => console.warn('[WARNING] ', err));
client.on('error', err => console.error('[ERROR] ', err));
client.on('shardError', error => console.error('[FATAL] Shard Error! ', error));
client.on('shardDisconnect', error => console.warn('[WARN] Shard Disconnect! ', error));
client.on('shardReady', success => console.log('[SHARD] Shard Ready! ', success));
client.on('shardReconnecting', warning => console.warn('[SHARD] Shard Reconnecting...'));
process.once('unhandledRejection', (promise, reason) => {
    console.error((`[FATAL]`), `Unhandled Promise Rejection at: ` + promise, ' reason: ', reason.catch());
});

//Load all files in the commands folder
client.commands = new Collection();
client.categories = fs.readdirSync('./commands');
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
        console.log(`Loading : ${file.toString()}`);
        console.log(`Loaded : ${file.toString()} \'Status:\' 'Success'`);
    }
}
console.log(colors.green('All files loaded correctly.'));

//Create a ready event to tell if they bot is ready to use
client.on('ready', () => {
    console.log('hi, im online!');
});

//Create a message event to handle messages
client.on('message', async message => {
    //code
})

//Have the bot login with the token
client.login(process.env.TOKEN);