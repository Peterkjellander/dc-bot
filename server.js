const Discord = require('discord.js');
const client = new Discord.Client();
var CommandFactory = require('./CommandFactory');
const asd = CommandFactory.CommandFactory;
var read = require('read-text-file');
const testFolder = './tests/';
const fs = require('fs');


// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.
var fileInfoSeparator = "_";
var siteRegex = "(a|)"
var sameNameRegex = "\(\d\)\.{mp4}";
var nadeFolder = 'C:/Users/peter/Source/Repos/dc-bot/nades';
var nadeObjects = [];
function setupNades() {
    fs.readdir(nadeFolder, (err, files) => {
        files.forEach(file => {
            var meta = file.split('_');
            //var nadeType = meta[0];
            //var mapName = meta[1];
            //var side = meta[2];
            //var siteName = meta[3];
            nadeObjects.push({
                nadeType: meta[0],
                mapName: meta[1],
                side: meta[2],
                site: meta[3],
                //read the file
            });
            //console.log(file);
            //meta.forEach(tag => {
            //    // scrub away (x)
            //    tag = tag.replace(new RegExp(sameNameRegex), "");
            //    console.log("tag: " + tag);
            //})            
        });
    })
}

var nades = setupNades();


client.on('message', message => {
    if (message.content === '!ping') {
        message.reply('pong');
    }

    if (message.content.startsWith('!nades')) {
        var filters = message.content.replace('!nades', "").split(' ');
        var nadeType = filters[0],
            mapName = filters[1],
            side = filters[2],
            site = filters[3]

        var matchingNades = nadeObjects.filter(function (no) {
            return no.nadeType === nadeType &&
                no.mapName === mapName &&
                no.side === side &&
                no.site.startsWith(site)
        });
        console.log('filtered were:');
        console.log(matchingNades);
    }
    if (message.content === '!') {
        CommandFactory.resolve(client, message.content);
       //filter !nades in the following way: !nades map site side e.g. !nades overpass a t to show t-side nades relevant to the a site on overpass
    }

});

var token = read.readSync("C:/Users/peter/Source/Repos/dc-bot/token.txt");
client.login(token);
var cmdFactory = new CommandFactory();
var b = asd.resolve(client, "!nades smoke overpass t a")
//CommandFactory.resolve(client, "!nades smoke overpass t a");